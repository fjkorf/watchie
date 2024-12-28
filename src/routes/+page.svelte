<script>
  import { Button } from "@sveltestrap/sveltestrap"
</script>
<svelte:head>
	<title>Watchie</title>
	<meta name="description" content="Watchie" />
</svelte:head>

<section>
	<h1>
		Watchie
	</h1>

	<Button type="primary" href="/auth">Log In</Button>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
