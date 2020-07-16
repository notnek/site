<template>
  <header class="mb-16">
    <component :is="component" :class="nameClasses">
      <nuxt-link
        class="text-gray-900 dark-mode:text-gray-100 hover:no-underline"
        to="/"
      >
        <span class="font-bold">Kenton Glass</span>, full-stack developer
      </nuxt-link>
    </component>

    <nav>
      <ul class="flex space-x-4">
        <li>
          <nuxt-link to="/" exact-active-class="underline">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/articles" active-class="underline">
            Articles
          </nuxt-link>
        </li>
        <li><a href="https://twitter.com/notnek">Twitter</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    component() {
      return this.useH1 ? 'h1' : 'div';
    },
    nameClasses() {
      if (this.useH1) {
        return null;
      }

      return 'text-lg leading-tight mb-2 md:text-xl';
    },
    useH1() {
      return ['/', '/about'].includes(this.$route.path);
    },
  },
};
</script>
