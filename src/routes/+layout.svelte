<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../theme/app.css';

	let { children } = $props();
</script>

<Header />
<main class="min-h-[calc(100vh-130px)] w-full">
	{@render children()}
</main>
<footer>ss</footer>
