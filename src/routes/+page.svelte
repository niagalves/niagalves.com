<script>
	import Intro from './components/Intro.svelte';
	import About from './components/About.svelte';
	import Skills from './components/Skills.svelte';
	import Experience from './components/Experience.svelte';
</script>

<svelte:head>
  <meta name="description" content="Um breve resumo sobre minha carreira profissional na área de desenvolvimento web." />
  <meta name="robots" content="index, follow" />

  <meta name="twitter:title" content="Niag Alves | Página Início" />
  <meta property="og:title" content="Niag Alves | Início" />
  <meta property="og:description" content="Um breve resumo sobre minha carreira profissional na área de desenvolvimento web." />
  <meta property="og:url" content="https://niagalves.com/" />
  <meta property="og:site_name" content="Niag Alves | Início" />

  <title>Niag Alves | Início</title>
</svelte:head>

<Intro />
<About />
<Skills />
<Experience />
