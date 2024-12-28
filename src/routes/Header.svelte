<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
</script>

<header>
    <h1>(watchie)</h1>
	<div class="corner">
		<a href="https://github.com/fkorf/watchie">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
        align-items:center;
	}

    header h1 {
      height: 48px;
      margin: 6px 0 0 10px;
    }

	.corner {
		width: 48px;
		height: 48px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	a:hover {
		color: var(--color-theme-1);
	}
</style>
