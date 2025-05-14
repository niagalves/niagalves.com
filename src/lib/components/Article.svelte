<script lang="ts">
	type Props = {
		href: string;
		title: string;
		description: string;
		date: string;
	};

	let { href, title, description, date }: Props = $props();
</script>

<article class="w-full max-w-full bg-white">
	<a {href} class="block rounded-none border-0 bg-white p-6 shadow-none" {title}>
		<h4 class="mb-2 text-2xl font-bold text-black">
			{title}<span class="text-primary">.</span>
		</h4>
		<div class="mb-4 flex items-center justify-start">
			<time datetime={date} class="text-xs font-normal">{date}</time>
		</div>
		<p class="text-base font-normal">
			{description}
		</p>
	</a>
</article>
