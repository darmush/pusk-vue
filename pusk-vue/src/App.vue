<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/jobs">Вакансии</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
