<template>
  <HeaderComponent />
  <!-- max-w-[1296px] -->
  <div class="pt-[80px]">
    <RouterView />
  </div>
  <FooterComponent />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
</script>
