<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto w-full max-w-3xl px-4">
	{@render children()}
</div>
