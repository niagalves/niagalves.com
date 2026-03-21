<script lang="ts">
	import '$lib/assets/css/main.css';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>
