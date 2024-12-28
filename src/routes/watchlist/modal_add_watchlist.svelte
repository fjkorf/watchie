<script>
  import {
    Button, ButtonGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input
    } from '@sveltestrap/sveltestrap';

  let open = false;
  const toggle = () => open = !open;

  let name = "";

  let addWatchlist = () => {
    if( name==="" ) { return; }
    // add watchlist
    toggle();
  };
</script>

<Modal isOpen={open} >
  <Form on:submit={addWatchlist}>
   <ModalHeader><h2>Add Watchlist</h2></ModalHeader>
   <ModalBody>
     <FormGroup floating label="Enter Watchlist name">
       <Input type="text" bind:value={name}/>
     </FormGroup>
   </ModalBody>
   <ModalFooter>
     <Button color="primary" type="submit">Add</Button>
     <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
   </Form>
</Modal>
