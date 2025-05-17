<script lang="ts">
	import { goto } from '$app/navigation';

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

<h1>Blog</h1>

{#if values.posts.length === 0}
	<p>Nenhum post encontrado.</p>
{:else}
	<ul>
		{#each values.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>
					<strong>{post.title}</strong><br />
					<small>{post.date}</small>
				</a>
			</li>
		{/each}
	</ul>

	<nav style="margin-top: 1rem;">
		<button onclick={() => setPage('prev')} disabled={values.page === 1}>← Anterior</button>
		<span style="margin: 0 1rem;">Página {values.page} de {values.totalPages}</span>
		<button onclick={() => setPage('next')} disabled={values.page === values.totalPages}
			>Próxima →</button
		>
	</nav>
{/if}
