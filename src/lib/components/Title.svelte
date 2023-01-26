<script lang="ts">
	export let text: string = '';
	export let type: string = '';

	const styles: string = 'font-bold text-4xl leading-[60px] mb-8 text-cyan-400';
</script>

{#if type === 'h1'}
	<h2 class={styles}>{text}</h2>
{:else if type === 'h2'}
	<h2 class={styles}>{text}</h2>
{:else}
	<span />
{/if}
