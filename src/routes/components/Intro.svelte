<script lang="ts">
	import Section from '$lib/components/Section.svelte';

	const list: string[] = ['Desenvolvedor web.', 'Open source.', 'Freelancer.'];
</script>

<Section>
	<div class="flex justify-between md:flex-row flex-col items-center">
		<img
			class="w-36 md:w-44 mx-auto rounded-full md:h-44 h-36 mb-8"
			src="/niagalves.png"
			alt="niagalves"
		/>
		<div>
			<h1 class="font-bold text-4xl md:text-6xl md:max-w-lg max-w-full lg:leading-[60px] mb-8">
				Olá, eu sou o
				<span class="text-cyan-400 font-bold">Niag Alves.</span>
			</h1>
			{#if list}
				<ul class="inline-flex gap-4">
					{#each list as item}
						<li class="capitalize font-normal text-base text-slate-400">
							{item}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</Section>
