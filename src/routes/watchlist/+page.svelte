<svelte:head>
	<title>Watchie</title>
	<meta name="description" content="Watchie" />
</svelte:head>
<script>
  import {
    Button, ButtonGroup,
    Modal,
    } from '@sveltestrap/sveltestrap';

  import {
    UserAuthStore,
    Watchlists,
    CurrentWatchlist
  } from '$lib/stores'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  import AddWatchlist from '$lib/components/modal_add_watchlist.svelte'
  import OpenWatchlist from '$lib/components/modal_open_watchlist.svelte'
  import DeleteWatchlist from '$lib/components/modal_delete_watchlist.svelte'
  import DisplayWatchlist from '$lib/components/display_watchlist.svelte'
  import AddSymbol from '$lib/components/modal_add_symbol.svelte'

// if we're not logged it return to auth

  onMount( () => {
    if( $UserAuthStore["session-token"] === "" ) {
      goto("/auth");
    };
  })

// modals logic

  const Modals = {
    Add:false,
    Open:false,
    Delete:false,
    AddSymbol:false
  }
  const toggle = m => e =>
    Modals[m] = !Modals[m];

</script>

<div class="text-column">

<div class="p-3 mt-3 border-top border-bottom">
  {#if $CurrentWatchlist >= 0}
  <DisplayWatchlist
    currentWatchlist={$Watchlists[$CurrentWatchlist]}
    openAddSymbol={toggle("AddSymbol")}  />
  {:else}
  To get started Add or Open a Watchlist by clicking the buttons below
  {/if}
</div>

<div class="p-3 mt-3 border-none">
  <ButtonGroup>
    <Button on:click={toggle("Add")}>
      Add Watchlist
    </Button>
    <Button on:click={toggle("Open")}>
      Open Watchlist
    </Button>
    <Button on:click={toggle("Delete")} disabled={$CurrentWatchlist===-1}>
      Delete Watchlist
    </Button>
  </ButtonGroup>
</div>

</div>

<Modal isOpen={Modals.Add} backdrop={false}>
  <AddWatchlist exit={toggle("Add")} />
</Modal>
<Modal isOpen={Modals.Open} scrollable={true} backdrop={false}>
  <OpenWatchlist exit={toggle("Open")} />
</Modal>
<Modal isOpen={Modals.Delete}  backdrop={false}>
  <DeleteWatchlist exit={toggle("Delete")} />
</Modal>
<Modal isOpen={Modals.AddSymbol} scrollable={true} backdrop={false}>
  <AddSymbol exit={toggle("AddSymbol")} />
</Modal>
