<template>
  <header
    class="items-center mb-16 space-y-2 md:flex md:space-y-0"
    :class="containerClasses"
  >
    <div>
      <NuxtImg
        alt="Illustration of Kenton Glass"
        src="/images/kenton-glass.jpg"
        class="rounded-md"
        :class="imageClasses"
        format="webp"
        width="80"
        height="80"
      />
    </div>
    <div>
      <Component :is="component" :class="nameClasses">
        <NuxtLink
          class="text-gray-900 dark-mode:text-gray-100 hover:no-underline"
          to="/"
        >
          Kenton Glass<span class="font-normal">, full-stack developer</span>
        </NuxtLink>
      </Component>

      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/" exact-active-class="underline">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles" active-class="underline">
              Articles
            </NuxtLink>
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
      return this.useH1 ? 'w-20 h-20' : 'w-16 h-16';
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
