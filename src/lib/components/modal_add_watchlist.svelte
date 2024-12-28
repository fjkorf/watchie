<script>
  import {
    Button,
    Modal, ModalBody, ModalFooter,
    Form, FormGroup, Input
    } from '@sveltestrap/sveltestrap';
    import { addWatchlist } from '$lib/watchlists'

    let name;
    export let exit;

    const add = () => {
      addWatchlist(name);
      exit();
     }


</script>
<ModalBody>
  <p>Add a new watchlist</p>
  <FormGroup floating label="Enter Watchlist name">
    <Input type="text" bind:value={name}/>
  </FormGroup>
</ModalBody>
<ModalFooter>
  <Button color="primary" on:click={add}>Add</Button>
  <Button color="secondary" on:click={exit}>Cancel</Button>
</ModalFooter>
