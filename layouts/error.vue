<template>
  <main>
    <h1 v-if="is404">404<span>, page not found</span></h1>
    <h1 v-else>Sorry<span>, an error occurred</span></h1>
    <nuxt-link to="/">Go to the homepage.</nuxt-link>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  computed: {
    is404() {
      return this.error.statusCode === 404;
    },
  },
  head() {
    const title = this.is404
      ? '404, page not found | Kenton Glass'
      : 'Error | Kenton Glass';

    return {
      titleTemplate: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: '',
        },
      ],
    };
  },
};
</script>
