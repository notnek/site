<template>
  <main>
    <h2>Recent Articles</h2>
    <ul v-if="hasAnyArticles">
      <li v-for="article in articles" :key="article.path">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
        <span class="text-base text-gray-600">{{ article.createdAt }}</span>
      </li>
    </ul>
    <p v-else>No articles yet.</p>

    <h2 class="mt-4">Experience</h2>
    <p>{{ skills }}</p>

    <h2 class="mt-4">Featured Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.url">
        <a :href="project.url">{{ project.name }}</a>
      </li>
    </ul>

    <h2 class="mt-4">Elsewhere</h2>
    <ul>
      <li v-for="link in externalLinks" :key="link.url">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
import format from 'date-fns/format';

export default {
  async asyncData({ $content }) {
    const { skills, projects, externalLinks } = await $content('stats').fetch();
    const articles = await $content('articles')
      .only(['title', 'createdAt', 'path'])
      .sortBy('date', 'asc')
      .limit(5)
      .fetch();

    return {
      skills: skills.join(', '),
      projects,
      externalLinks,
      articles: articles.map((a) => {
        return {
          ...a,
          createdAt: format(new Date(a.createdAt), 'MMMM do, y'),
        };
      }),
    };
  },
  computed: {
    hasAnyArticles() {
      return this.articles.length > 0;
    },
  },
  head: {
    title: 'Kenton Glass, full-stack developer',
  },
};
</script>
