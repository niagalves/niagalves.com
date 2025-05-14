<script lang="ts">
	type Props = {
		href: string;
		title: string;
		description: string;
		date: string;
	};

	let { href, title, description, date }: Props = $props();
</script>

<article class="transition duration-300 hover:scale-[1.01]">
	<a {href} class="block rounded-xl border border-gray-100 bg-white p-6 shadow-md" {title}>
		<h4 class="mb-2 text-2xl font-black text-black">{title}</h4>
		<p class="mb-4 text-sm font-medium">
			{description}
		</p>
		<div class="flex items-center justify-end">
			<time datetime={date} class="text-base font-medium">{date}</time>
		</div>
	</a>
</article>
