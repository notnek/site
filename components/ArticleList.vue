<template>
  <ul v-if="hasAnyArticles" class="space-y-3 list-disc list-inside">
    <li v-for="article in articles" :key="article.path">
      <nuxt-link :to="article.path" v-text="article.title" />
      <span class="text-base text-gray-800 dark-mode:text-gray-400">
        {{ article.createdAt | formatFullDate }}
      </span>
    </li>
  </ul>
  <p v-else>
    No articles yet.
  </p>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    hasAnyArticles() {
      return this.articles.length > 0;
    },
  },
};
</script>
