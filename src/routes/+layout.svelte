<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../theme/app.css';

	let { children } = $props();
</script>

<Header />
<main class="my-8">
	{@render children()}
</main>
