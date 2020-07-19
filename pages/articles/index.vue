<template>
  <main>
    <h1>Articles</h1>
    <article-list :articles="articles" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'publishedAt', 'path'])
      .sortBy('publishedAt', 'desc')
      .fetch();

    return {
      articles,
    };
  },
  head() {
    const title = 'Articles by Kenton Glass';
    const description =
      'Ramblings about life, sports and programming from Kenton Glass.';

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    };
  },
};
</script>
