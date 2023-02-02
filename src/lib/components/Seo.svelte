<script lang="ts">
	import { page } from '$app/stores';

	$: url = $page.url.href;

	export let title: string = '';
	export let description: string = '';
	export let type: string = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{@html `<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${type}",
      "name": "${title}",
      "description": "${description}",
      "url": "${url}",
    },
    "author": {
      "@type": "Person",
      "name": "Niag Alves",
    }
  </script>`}
</svelte:head>
