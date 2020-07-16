<template>
  <div class="max-w-2xl mx-auto">
    <site-header />
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class:
        'px-4 pt-6 pb-24 md:pt-24 bg-white text-gray-900 font-sans dark-mode:bg-gray-900 dark-mode:text-gray-100 text-lg leading-relaxed',
    },
  },
};
</script>
