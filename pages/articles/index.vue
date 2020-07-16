<template>
  <main>
    <h1>Articles</h1>
    <ul v-if="anyArticles">
      <li v-for="article in articles" :key="article.path">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        <span class="text-sm text-gray-600">{{ article.createdAt }}</span>
      </li>
    </ul>
    <p v-else>No articles yet.</p>
  </main>
</template>

<script>
import format from 'date-fns/format';

export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'createdAt', 'path'])
      .sortBy('date', 'asc')
      .fetch();

    return {
      articles: articles.map((a) => {
        return {
          ...a,
          createdAt: format(new Date(a.createdAt), 'MMMM do, y'),
        };
      }),
    };
  },
  computed: {
    anyArticles() {
      return this.articles.length > 0;
    },
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
