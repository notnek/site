const siteTitle = 'Kenton Glass';
const siteDescription =
  'Kenton Glass is a full-stack developer in Louisville, KY';

export default {
  mode: 'universal',
  target: 'static',
  components: true,
  loading: {
    color: '#2B6CB0',
  },
  head: {
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      { hid: 'og:title', property: 'og:title', content: siteTitle },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteDescription,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/pinned-tab.svg', color: '#2B6CB0' },
      {
        rel: 'alternate',
        href: 'https://kenton.glass/feed/rss.xml',
        type: 'application/rss+xml',
      },
      {
        rel: 'alternate',
        href: 'https://kenton.glass/feed/feed.json',
        type: 'application/json',
      },
    ],
  },
  plugins: ['@/plugins/filters.js'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/feed'],
  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },
  feed() {
    const { $content } = require('@nuxt/content');
    const baseUrlArticles = 'https://kenton.glass/articles';
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    };
    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Articles by Kenton Glass',
        description:
          'Ramblings about life, sports and programming from Kenton Glass.',
        link: baseUrlArticles,
      };

      const articles = await $content('articles').fetch();

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;
        let summary = article.body;

        if (summary.length > 60) {
          summary = summary.substring(0, 60);
          summary = `${summary.substring(0, summary.lastIndexOf(' '))}…`;
        }

        console.log(summary);
        console.log(article.body);

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.publishedAt),
          description: summary,
          content: article.body,
          author: 'Kenton Glass',
        });
      });
    };

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `/feed/${file}`,
      type,
      create: createFeedArticles,
    }));
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-import': {},
      },
    },
  },
};
