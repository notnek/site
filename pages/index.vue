<template>
  <main>
    <h2>Recent Articles</h2>
    <article-list :articles="articles" />

    <h2 class="mt-6">Experience</h2>
    <p>{{ skills }}</p>

    <h2 class="mt-6">Featured Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.url">
        <a :href="project.url">{{ project.name }}</a>
      </li>
    </ul>

    <h2 class="mt-6">Elsewhere</h2>
    <ul>
      <li v-for="link in externalLinks" :key="link.url">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const { skills, projects, externalLinks } = await $content('stats').fetch();
    const articles = await $content('articles')
      .only(['title', 'publishedAt', 'path'])
      .sortBy('date', 'asc')
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
