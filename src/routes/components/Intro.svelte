<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	const list: string[] = ['Desenvolvedor web.', 'Open source.', 'Freelancer.'];
</script>

<Section>
	<h1 class="font-bold text-6xl max-w-lg leading-[60px] mb-8">
		Olá, eu sou o
		<span class="text-cyan-400 font-bold">Niag Alves.</span>
	</h1>
	{#if list}
		<ul class="inline-flex gap-4">
			{#each list as item}
				<li
					class="hover:border-cyan-400 capitalize transition duration-700
            ease-in-out border-transparent border-b-2 md:text-lg text-base font-normal"
				>
					{item}
				</li>
			{/each}
		</ul>
	{/if}
</Section>
