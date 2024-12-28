<script>
  import {
    Button,
    FormGroup, Input,
    ListGroup, ListGroupItem,
    ModalBody, ModalFooter,
    } from '@sveltestrap/sveltestrap';
import { Watchlists } from '$lib/stores'

  import { setCurrentWatchlist } from '$lib/watchlists'

    export let exit;

  const selectWatchlist = i => () => {
      setCurrentWatchlist(i);
      exit();
  }

</script>

<ModalBody>
  <ListGroup flush={false} horizontal={false} numbered={false}>
    {#each $Watchlists as list, i}
    <ListGroupItem on:click={selectWatchlist(i)} tag="button">
      {list.name}
    </ListGroupItem>
    {/each}
  </ListGroup>
</ModalBody>
<ModalFooter>
  <Button color="secondary" on:click={exit}>Cancel</Button>
</ModalFooter>
