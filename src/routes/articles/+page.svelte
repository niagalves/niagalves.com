<script>
  import Seo from '$lib/components/Seo.svelte';

	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';

	import articles from './articles.json';
</script>


<Seo
  title="Niag Alves | Artigos"
  description="Lista de todos os artigos escritos por mim até o momento."
  type="website" />

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
