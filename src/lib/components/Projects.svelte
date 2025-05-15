<script lang="ts">
	import Article from './Article.svelte';
	import Container from './Container.svelte';

	let { repositories } = $props();
</script>

<section id="projects" class="py-8">
	<Container>
		<div class="w-full max-w-full text-center sm:text-left lg:text-left">
			<h3 class="mb-8 text-lg font-normal">Projetos recentes no github</h3>
		</div>

		{#if repositories.length}
			<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-1">
				{#each repositories as item}
					<Article
						title={item.name}
						description={item.description}
						date={item.date}
						href={item.href}
						isBg
						isExternal
					/>
				{/each}
			</div>

			<div class="text-center">
				<a
					href="https://github.com/niagalves?tab=repositories"
					title="github"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary text-xs font-semibold"
				>
					Ver mais
				</a>
			</div>
		{:else}
			<p class="text-center text-sm font-normal">Nenhum repositório disponível.</p>
		{/if}
	</Container>
</section>
