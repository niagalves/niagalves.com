<script lang="ts">
	import { page } from '$app/stores';

	type List = {
		title: string;
		url: string;
	};

	const list: List[] = [
		{
			title: 'Artigos',
			url: '/articles'
		},
		{
			title: 'Projetos',
			url: '/projects'
		}
	];
</script>

<header class="p-4 max-w-4xl mx-auto flex justify-between items-center flex-wrap">
	<a href="/" title="Início" class="flex items-center flex-row gap-1">
		<span class="font-bold inline-flex">
			Niag
			<span class="font-bold">Alves</span>
		</span>
		<span class="text-cyan-400 font-black"> /> </span>
	</a>
	<nav>
		{#if list}
			<ul class="flex items-center gap-4 flex-wrap">
				{#each list as item}
					<li>
						<a
							href={item.url}
							title={item.title}
							class:active={$page.route.id?.split('/')[1].includes(item.url.split('/')[1])}
							class="hover:border-cyan-400 hover:text-white capitalize transition duration-700
            ease-in-out border-transparent border-b-2 text-slate-400 text-sm font-medium"
						>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
</header>

<style lang="postcss">
	.active {
		@apply border-cyan-400 text-white;
	}
</style>
