<svelte:head>
	<title>Welcome</title>
	<meta name="description" content="Login to Watchie" />
</svelte:head>
<script>
  import { Button, Badge, Form, FormGroup, Input } from '@sveltestrap/sveltestrap';
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { authenticateUser } from '$lib/tasty'
  let login = '';
  let password = '';
  let loading = false;
  let error = false;
  onMount( () => {
    if( $UserAuthStore["session-token"] !== "" ) {
      goto("/watchlist");
    };
  })
  const authUser = e => {
    e.preventDefault();
    // validate email
    if( login=='' ) { alert("email is required"); return; }
    // check password rules
    if( password=='' ) { alert("password is required"); return; }
    loading = true;

    /*
    attempt login
    on success, and redirect to the watchlist
    on error, display error
    */
    authenticateUser(
        {login, password},
        ()=> goto("/watchlist"),
        e => {
           error = e;
    })
  }
</script>

<div class="text-column">
  <h1>Welcome</h1>
  <p>please provide login credentials to continue</p>
  <FormGroup floating label="Enter email">
    <Input type="email" bind:value={login}/>
  </FormGroup>
  <FormGroup floating label="Enter password">
    <Input type="password" bind:value={password}/>
  </FormGroup>
  <Button color="primary" on:click={authUser}>Authenticate</Button>
  {#if error}
    <p class="border error">
      {error.response?.data?.error.message }
    </p>
  {/if}
</div>
