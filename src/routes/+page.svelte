<script>
	import Article from '$lib/components/Article.svelte';
	import Container from '$lib/components/Container.svelte';
</script>

<section id="home" class="mb-24">
	<Container>
		<div class="w-full max-w-full text-center sm:text-left lg:text-left">
			<h1 class="mb-4 text-5xl leading-16 font-bold">
				Niag Alves<span class="text-primary">.</span>
			</h1>
			<p class="mb-4 text-base font-normal">
				Lorem ipsum dolor sit <strong>amet consectetur</strong>, adipisicing elit. Placeat corrupti
				unde optio fugit ab veritatis soluta, <strong>amet consectetur</strong>, similique fugiat
				dolor excepturi praesentium suscipit? Error, aliquam? Voluptatem quis fugiat sint aut vero.
			</p>
		</div>
	</Container>
</section>

<section id="posts" class="bg-[#EDF7FA] py-8">
	<Container>
		<div class="w-full max-w-full text-center sm:text-left lg:text-left">
			<h2 class="mb-8 text-lg font-normal">
				Artigos recentes<span class="text-primary">.</span>
			</h2>
		</div>

		<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
			<Article
				title="Making a design system from scratch"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo ad vitae asperiores,
						repudiandae provident possimus perspiciatis magnam"
				date="21/04/2025"
				href="/"
			/>
			<Article
				title="Making a design system from scratch"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo ad vitae asperiores,
					repudiandae provident possimus perspiciatis magnam"
				date="21/04/2025"
				href="/"
			/>
		</div>
	</Container>
</section>
