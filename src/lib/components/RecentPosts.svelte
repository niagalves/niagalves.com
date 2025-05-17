<script lang="ts">
	import Article from './Article.svelte';
	import Container from './Container.svelte';

	let posts = $state<Post[]>([]);

	const fetchPosts = async () => {
		try {
			const res = await fetch(`/api/posts?page=1&pageSize=2`);

			if (!res.ok) {
				throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
			}

			const data = await res.json();
			posts = data.posts;
		} catch (error) {
			console.error('Falha ao buscar posts:', error);
		}
	};

	$effect(() => {
		fetchPosts();
	});
</script>

<section id="posts" class="bg-secondary py-8">
	<Container>
		<div class="w-full max-w-full text-center sm:text-left lg:text-left">
			<h2 class="mb-8 text-lg font-normal">Artigos recentes</h2>
		</div>

		{#if posts.length}
			<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				{#each posts as item}
					<Article
						title={item.title}
						description={item.description}
						date={item.date}
						href={`/blog/${item.slug}`}
					/>
				{/each}
			</div>

			<div class="text-center">
				<a href="/blog" title="Blog" class="text-primary text-xs font-semibold"> Ver mais </a>
			</div>
		{:else}
			<p class="text-center text-sm font-normal">Nenhum artigo disponível.</p>
		{/if}
	</Container>
</section>
