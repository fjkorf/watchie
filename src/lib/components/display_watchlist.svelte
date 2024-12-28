<script>
  import {
    Button,
    Table,
    Dropdown, DropdownMenu, DropdownToggle, DropdownItem
    } from '@sveltestrap/sveltestrap';

  import { getQuoteToken } from '$lib/tasty'

  export let openAddSymbol;
  export let currentWatchlist;

    import {
      removeSymbolFromCurrentWatchlist
      } from '$lib/watchlists'


  const removeSymbol = symbol => () => removeSymbolFromCurrentWatchlist(symbol)

/*
  get api token
  const client = new DXLinkWebsocketClient()
  client.setAuth(token)
  client.connect(WS_ADDR)


  getQuoteToken(
  result => console.log("quote token",result),
  e=>console.log(e)
);
  */

</script>


<h2>{currentWatchlist.name}</h2>
<Table striped>
  <thead>
    <tr>
    <th>Symbol</th>
    <th>Bid</th>
    <th>Ask</th>
    <th>Last</th>
    <th></th>
    </tr>
  </thead>
  <tbody>
   {#each currentWatchlist.symbols as symbol }
    <tr>
      <th scope="row">{symbol}</th>
      <td>1.0</td>
      <td>1.0</td>
      <td>1.0</td>
      <td>
      <Dropdown>
        <DropdownToggle caret />
        <DropdownMenu>
          <DropdownItem href="/symbol">View Symbol Details</DropdownItem>
          <DropdownItem on:click={removeSymbol(symbol)}>Remove Symbol</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </tr>
   {/each}
  </tbody>
</Table>
<Button outline on:click={openAddSymbol} >Add Symbol</Button>
