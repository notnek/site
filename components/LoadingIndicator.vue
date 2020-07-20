<template>
  <div
    v-if="loading"
    class="fixed w-6 h-6 border-2 border-gray-400 border-solid rounded-full dark-mode:border-gray-600 top-6 right-6 after:rounded-full after:w-6 after:h-6"
  />
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
div {
  border-left: 0.25rem solid transparent;
  transform: translateZ(0);
  animation: spinning 1s infinite linear;
}

@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
