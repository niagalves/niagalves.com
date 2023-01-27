<script lang="ts">
	import { onMount } from 'svelte';
	import Section from '$lib/components/Section.svelte';
	import Title from '$lib/components/Title.svelte';
	import projects from './projects.json';
</script>

<Section>
	<Title text="Projetos." type="h2" />

	{#if projects}
		<ul class="flex items-center flex-col gap-8">
			{#each projects as item}
				<li>
					<div class="flex items-center flex-wrap flex-row justify-start w-full">
						<h4 class="mb-4">
							<a
								href={item.url}
								title={item.title}
								target="_blank"
								rel="noreferrer"
								class="text-white hover:border-cyan-400 hover:text-white transition duration-700
          ease-in-out border-transparent border-b-2 font-bold text-[26px] leading-[40px]"
							>
								{item.title}
							</a>
						</h4>
						<p class="mb-4">
							{item.description}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</Section>
