<script lang="ts">
	import { page } from '$app/state';
	import links from '../../utils/links';
</script>

<header>
	<div class="mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-6">
		<nav>
			<ul class="flex gap-6">
				{#each links as item}
					<li>
						<a
							href={item.href}
							title={item.title}
							class={`hover:text-primary border-0 text-base font-semibold transition ease-in hover:border-b-2 
							${
								page.url.pathname === item.href || page.url.pathname.startsWith(item.href + '/')
									? 'text-primary border-b-2'
									: ''
							}`}
						>
							{item.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
