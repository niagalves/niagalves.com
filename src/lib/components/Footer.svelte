<script lang="ts">
	type Social = {
		title: string;
		url: string;
	};

	const social: Social[] = [
		{
			title: 'LinkedIn.',
			url: 'https://www.linkedin.com/in/niagalves/'
		},
		{
			title: 'Github.',
			url: 'https://github.com/niagalves'
		},
		{
			title: 'Twitter.',
			url: 'https://twitter.com/niagalves'
		},
		{
			title: 'Instagram.',
			url: 'https://www.instagram.com/niagalves/'
		}
	];
</script>

<footer class="p-4 max-w-3xl mx-auto flex items-center flex-col">
	{#if social}
		<ul class="inline-flex gap-4">
			{#each social as item}
				<li>
					<a
						href={item.url}
						title={item.title}
						target="_blank"
						rel="noreferrer"
						class="hover:border-cyan-400 hover:text-white capitalize transition duration-700
            ease-in-out border-transparent border-b-2 text-slate-400 text-sm font-semibold"
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</footer>
