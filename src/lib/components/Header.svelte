<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{
			title: 'Início',
			href: '/'
		},
		{
			title: 'Blog',
			href: '/blog'
		},
		{
			title: 'Links',
			href: '/links',
			newWindow: true
		}
	];
</script>

<header>
	<div class="mx-auto mb-8 flex w-full max-w-5xl items-center justify-end px-4 py-6">
		<nav>
			<ul class="flex gap-6">
				{#each links as item}
					<li>
						<a
							href={item.href}
							title={item.title}
							target={item.newWindow ? '_blank' : '_self'}
							rel={item.newWindow ? 'noopener noreferrer' : undefined}
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
