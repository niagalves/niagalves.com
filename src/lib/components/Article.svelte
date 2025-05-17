<script lang="ts">
	type Props = {
		href: string;
		title: string;
		description: string;
		date: string;
		isBg?: boolean;
		isExternal?: boolean;
	};

	const truncate = (text: string, maxLength: number): string => {
		return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '...' : text;
	};

	let { href, title, description, date, isBg = false, isExternal = false }: Props = $props();
</script>

<article class="group w-full max-w-full">
	<a
		{href}
		class={`block rounded-none border-0  p-6 shadow-none ${isBg ? 'bg-secondary' : 'bg-white'} `}
		{title}
		target={isExternal ? '_blank' : '_self'}
		rel={isExternal ? 'noopener noreferrer' : undefined}
	>
		<h4 class=" group-hover:text-primary mb-2 text-2xl font-bold text-black transition ease-in">
			{truncate(title, 40)}
		</h4>
		<div class="mb-4 flex items-center justify-start">
			<time datetime={date} class="text-xs font-normal">{date}</time>
		</div>
		<p class="text-sm font-normal">
			{truncate(description, 80) || 'Nenhuma descrição disponível'}
		</p>
	</a>
</article>
