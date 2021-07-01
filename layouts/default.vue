<template>
  <LazyHydrate when-idle>
    <div class="max-w-2xl mx-auto">
      <VueAnnouncer />
      <SiteHeader />
      <Nuxt />
    </div>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
  },
  head: {
    bodyAttrs: {
      class:
        'px-4 pt-6 pb-24 md:pt-24 bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100 text-xl leading-relaxed',
    },
  },
};
</script>
