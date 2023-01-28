<script>
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';

	import articles from './articles.json';
</script>

<svelte:head>
  <meta name="description" content="Lista de todos os artigos escritos por mim até o momento." />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Niag Alves | Projetos" />
  <meta property="og:description" content="Lista de todos os artigos escritos por mim até o momento." />
  <meta property="og:url" content="https://niagalves.com/articles" />
  <meta property="og:site_name" content="Niag Alves | Artigos" />

  <title>Niag Alves | Artigos</title>
</svelte:head>

<Section>
	<Title text="Artigos." type="h1" />

	{#if articles}
		<ul class="flex items-center flex-col gap-8">
			{#each articles as item}
				<li>
					<article class="flex items-center flex-wrap flex-row justify-start w-full">
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
						<time class="font-semibold text-xs">Publicado em: {item.date}</time>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</Section>
