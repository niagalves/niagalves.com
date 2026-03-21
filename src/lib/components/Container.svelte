<script lang="ts">
	let { children } = $props();
</script>

<div class="max-w-5xl mx-auto w-full px-4">
	{@render children()}
</div>
