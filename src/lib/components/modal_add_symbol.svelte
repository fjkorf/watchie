<script>
  import {
    Button,
    FormGroup, Input,
    ListGroup, ListGroupItem,
    ModalBody, ModalFooter,
    } from '@sveltestrap/sveltestrap';

    import {
      addSymbolToCurrentWatchlist
      } from '$lib/watchlists'

  import {
    searchSymbols
} from '$lib/tasty'

    export let exit;
    let query;
    let selected = false;
    let suggestions = [];

    let requestQuery = () => {
        if(query.length < 3) { return; }
        searchSymbols(query,
          result => suggestions = result,
          err => console.log(err)
        )
    }

  const addSymbol = () => {
    addSymbolToCurrentWatchlist(selected);
    exit();
  }
</script>

<ModalBody>
   <FormGroup floating label="Enter Symbol search query">
     <Input type="text" bind:value={query} on:input={requestQuery} />
   </FormGroup>
  <ListGroup flush={false} horizontal={false} numbered={false}>
    {#each suggestions as obj}
    <ListGroupItem tag="button" on:click={()=>selected=obj.symbol}>
      <strong>{obj.symbol}</strong>
      <label>{obj.description}</label>
    </ListGroupItem>
    {/each}
  </ListGroup>
</ModalBody>
<ModalFooter>
  <strong hidden={!selected} >{selected}</strong>
  <Button color="primary" disabled={!selected} on:click={addSymbol}>Add</Button>
  <Button color="secondary" on:click={exit}>Cancel</Button>
</ModalFooter>
