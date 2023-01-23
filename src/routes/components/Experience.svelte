<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Subtitle from '$lib/components/Subtitle.svelte';

	type List = {
		title: string;
		company: string;
		date: string;
		prev?: List[];
	};

	const list = [
		{
			title: 'Desenvolvedor Front-end.',
			company: 'Softdesign.',
			date: 'Novembro/2020 até o momento.'
		},
		{
			title: 'Desenvolvedor Front-end',
			company: 'Safeweb - Segurança da Informação.',
			date: 'Outubro/2018 até Novembro/2020.',
			prev: [
				{
					title: 'Anterior UX/UI Designer',
					company: 'Safeweb - Segurança da Informação.',
					date: 'Agosto/2017 até Outubro/2018.'
				}
			]
		},
		{
			title: 'Estagiário de Desenvolvimento Web.',
			company: 'Opideia.',
			date: 'Março/2016 até Agosto/2017.'
		}
	];
</script>

<Section>
	<Subtitle text="Expêriencias." />
	{#if list}
		<ul class="inline-flex flex-col gap-4 w-full">
			{#each list as item}
				<li class="flex flex-wrap flex-col">
					<h4 class="font-medium text-base">{item.title}</h4>
					<small class="font-medium text-sm">{item.company}</small>
					<time class="text-xs font-medium">{item.date}</time>
					{#if item.prev}
						{#each item.prev as prev}
							<div class="ml-3 mt-3 flex flex-col">
								<h4 class="font-normal text-sm">{prev.title}</h4>
								<small class="font-normal text-xs">{prev.company}</small>
								<time class="text-xs font-normal">{prev.date}</time>
							</div>
						{/each}
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</Section>
