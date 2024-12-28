<script>
  import {
    Button,
    ModalBody, ModalFooter,
    } from '@sveltestrap/sveltestrap';

    export let exit;

    import { removeCurrentWatchlist } from '$lib/watchlists'
</script>

<ModalBody>Are you sure you want to delete this watchlist?</ModalBody>
<ModalFooter>
  <Button color="primary" on:click={exit}>Yes</Button>
  <Button color="secondary" on:click={exit}>Cancel</Button>
</ModalFooter>
