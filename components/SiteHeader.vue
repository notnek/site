<template>
  <header
    class="mb-16 md:flex items-center space-y-2 md:space-y-0"
    :class="containerClasses"
  >
    <div>
      <img
        alt="Illustration of Kenton Glass"
        class="rounded-md"
        :class="imageClasses"
        src="~/assets/images/kenton-glass.jpg"
        srcset="
          ~/assets/images/kenton-glass.jpg    1x,
          ~/assets/images/kenton-glass@2x.jpg 2x
        "
      />
    </div>
    <div>
      <component :is="component" :class="nameClasses">
        <nuxt-link
          class="text-gray-900 dark-mode:text-gray-100 hover:no-underline"
          to="/"
        >
          Kenton Glass<span class="font-normal">, full-stack developer</span>
        </nuxt-link>
      </component>

      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" exact-active-class="underline">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/articles" active-class="underline">
              Articles
            </nuxt-link>
          </li>
          <li><a href="https://twitter.com/notnek">Twitter</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    component() {
      return this.useH1 ? 'h1' : 'div';
    },
    containerClasses() {
      return this.useH1 ? 'md:space-x-5' : 'md:space-x-3';
    },
    imageClasses() {
      return this.useH1 ? 'w-20' : 'w-16';
    },
    nameClasses() {
      if (this.useH1) {
        return 'mb-0';
      }

      return 'text-lg leading-tight mb-0 md:text-xl font-bold';
    },
    useH1() {
      return ['/', '/about'].includes(this.$route.path);
    },
  },
};
</script>
