<template>
  <main>
    <h1 class="flex flex-col-reverse">
      <span class="font-bold">{{ article.title }}</span>
      <span class="font-normal text-sm text-gray-600">
        {{ article.createdAt | fullDate }}
      </span>
    </h1>

    <nuxt-content :document="article" />

    <div class="mt-12 text-sm flex justify-between">
      <nuxt-link to="/articles" class="block">&larr; All Articles</nuxt-link>
      <div class="text-gray-600">
        Kenton Glass &copy; {{ article.createdAt | year }}
      </div>
    </div>
  </main>
</template>

<script>
import format from 'date-fns/format';

export default {
  filters: {
    year(date) {
      return format(new Date(date), 'y');
    },
    fullDate(date) {
      return format(new Date(date), 'MMMM do, y');
    },
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    return {
      article,
    };
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
