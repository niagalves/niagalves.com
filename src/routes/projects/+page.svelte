<script>
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';

	import projects from './projects.json';
</script>

<svelte:head>
  <meta name="description" content="Lista de projetos que atualmente estão em produção." />
  <meta name="robots" content="index, follow" />

  <meta name="twitter:title" content="Niag Alves | Projetos">
  <meta name="twitter:description" content="Lista de projetos que atualmente estão em produção.">

  <meta property="og:title" content="Niag Alves | Projetos" />
  <meta property="og:description" content="Lista de projetos que atualmente estão em produção." />
  <meta property="og:url" content="https://niagalves.com/projects" />
  <meta property="og:site_name" content="Niag Alves | Projetos" />

  <title>Niag Alves | Projetos</title>
</svelte:head>

<Section>
	<Title text="Projetos." type="h2" />

	{#if projects}
		<ul class="flex items-center flex-col gap-8">
			{#each projects as item}
				<li>
					<div class="flex items-center flex-wrap flex-row justify-start w-full">
						<h4 class="mb-4">
							<a
								href={item.url}
								title={item.title}
								target="_blank"
								rel="noreferrer"
								class="text-white hover:border-cyan-400 hover:text-white transition duration-700
          ease-in-out border-transparent border-b-2 font-bold text-[26px] leading-[40px]"
							>
								{item.title}
							</a>
						</h4>
						<p class="mb-4">
							{item.description}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</Section>
