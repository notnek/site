<template>
  <div>
    <site-header />
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class:
        'p-4 md:p-24 bg-white text-gray-900 font-sans dark-mode:bg-gray-900 dark-mode:text-gray-100',
    },
    titleTemplate: '%s by Kenton Glass',
  },
};
</script>
