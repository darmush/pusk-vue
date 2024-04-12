<template>
    <router-link :to="link" class="block text-center w-[280px] py-5 bg-accent hover:bg-hover active:bg-active text-text-dark font-semibold text-sm">
      <slot name="text"></slot>
    </router-link>
  </template>

<script>
export default {
    props: {
        link: String,
    },
}
</script>
