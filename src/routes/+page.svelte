<script lang="ts">
	import type { PageProps } from './$types';
	import Intro from '$lib/components/Intro.svelte';
	import RecentPosts from '$lib/components/RecentPosts.svelte';
	import Projects from '$lib/components/Projects.svelte';

	let { data }: PageProps = $props();
</script>

<Intro />
<RecentPosts />
<Projects repositories={data.repositories} />
