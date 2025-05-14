<script>
	import Article from './Article.svelte';
	import Container from './Container.svelte';
</script>

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
