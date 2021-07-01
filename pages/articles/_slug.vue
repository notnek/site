<template>
  <main>
    <h1 class="flex flex-col-reverse">
      <nuxt-link
        class="font-bold text-gray-900 dark:text-gray-100 hover:no-underline"
        :to="article.path"
        v-text="article.title"
      />
      <div class="text-base font-normal text-gray-700 dark:text-gray-400">
        {{ article.createdAt | formatFullDate }}
      </div>
    </h1>

    <NuxtContent :document="article" />

    <footer class="flex justify-between mt-12 text-base">
      <nuxt-link
        class="block"
        to="/articles"
      >
        &larr; All Articles
      </nuxt-link>
      <nuxt-link
        class="block text-gray-700 dark:text-gray-400"
        to="/"
      >
        Kenton Glass &copy; {{ article.createdAt | formatYear }}
      </nuxt-link>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    return {
      article,
    };
  },
  head() {
    const title = `${this.article.title} by Kenton Glass`;
    const description = this.article.description || '';

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
