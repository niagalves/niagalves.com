<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto w-full max-w-4xl px-4">
	{@render children()}
</div>
