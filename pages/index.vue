<template>
  <main>
    <h2>Recent Articles</h2>
    <lazy-hydrate when-idle>
      <lazy-article-list :articles="articles" />
    </lazy-hydrate>

    <h2 class="mt-6">Featured Projects</h2>
    <ul class="space-y-3">
      <li v-for="project in projects" :key="project.url">
        <a
          :href="project.url"
          rel="noopener"
          target="_blank"
          v-text="project.name"
        />
      </li>
    </ul>

    <h2 class="mt-6">Elsewhere</h2>
    <ul class="space-y-3">
      <li v-for="link in externalLinks" :key="link.url">
        <a :href="link.url" rel="noopener" target="_blank" v-text="link.name" />
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { skills, projects, externalLinks } = await $content('stats').fetch();
    const articles = await $content('articles')
      .only(['title', 'createdAt', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch();

    return {
      skills: skills.join(', '),
      projects,
      externalLinks,
      articles,
    };
  },
  head: {
    title: 'Kenton Glass, full-stack developer',
  },
};
</script>
