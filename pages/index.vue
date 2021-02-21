<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Nuxt knowledge</h1>
      <div class="links">
        <NuxtLink to="/button">Button</NuxtLink><br />
        <NuxtLink to="/grah">Grah</NuxtLink><br />
        <NuxtLink to="/computed">Computed</NuxtLink><br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.links {
  padding-top: 15px;
}
</style>
