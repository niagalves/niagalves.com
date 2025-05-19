<script lang="ts">
	import { goto } from '$app/navigation';
	import Article from '$lib/components/Article.svelte';
	import Container from '$lib/components/Container.svelte';

	let values = $state({
		posts: [] as Post[],
		page: 1,
		pageSize: 10,
		totalPages: 1
	});

	const fetchPosts = async (page: number = 1) => {
		try {
			const res = await fetch(`/api/posts?page=${page}&pageSize=${values.pageSize}`);

			if (!res.ok) {
				throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
			}

			const data = await res.json();

			values = {
				posts: data.posts,
				page: data.page,
				pageSize: data.pageSize,
				totalPages: data.totalPages
			};
		} catch (error) {
			console.error('Falha ao buscar posts:', error);
		}
	};

	$effect(() => {
		fetchPosts(Number(new URLSearchParams(window.location.search).get('page')) || 1);
	});

	const setPage = (type = '') => {
		if (type == 'next') {
			goto(`/blog?page=${values.page + 1}`);
		}

		if (type === 'prev') {
			goto(`/blog?page=${values.page - 1}`);
		}
	};
</script>

<section id="blog" class="mb-24">
	<Container>
		<div class="w-full max-w-full text-left">
			<h1 class="mb-8 text-5xl leading-16 font-bold">Blog</h1>
		</div>
		{#if values.posts.length}
			<div class="mb-8 grid grid-cols-1 gap-4">
				{#each values.posts as item}
					<Article
						title={item.title}
						description={item.description}
						date={item.date}
						href={`/blog/${item.slug}`}
					/>
				{/each}
			</div>
			<div class="flex items-center justify-center">
				<button
					type="button"
					onclick={() => setPage('prev')}
					disabled={values.page === 1}
					title="Página anterior"
					class="bg-primary disabled:pointer-none cursor-pointer rounded-md p-1 text-base text-white disabled:cursor-not-allowed disabled:bg-gray-500"
				>
					Página anterior
				</button>
				<span class="mx-4">{values.page} de {values.totalPages}</span>
				<button
					type="button"
					onclick={() => setPage('next')}
					disabled={values.page === values.totalPages}
					title="Próxima página"
					class="bg-primary disabled:pointer-none cursor-pointer rounded-md p-1 text-base text-white disabled:cursor-not-allowed disabled:bg-gray-500"
				>
					Próxima página
				</button>
			</div>
		{:else}
			<p class="text-center text-sm font-normal">Nenhum artigo disponível.</p>
			<div class="mt-4 text-center">
				<a href="/blog" title="Tentar novamente" class="text-primary text-xs font-semibold">
					Tentar novamente
				</a>
			</div>
		{/if}
	</Container>
</section>
