<script setup lang="ts">
import { Footer, Header } from '#components';
</script>

<template>
  <Header />
  <main class="bg-teal-600 min-h-screen">
    <slot />
  </main>
  <Footer />
</template>
