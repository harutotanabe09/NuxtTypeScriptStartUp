<template>
  <div class="first-page">aaaaaaaaa</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'default',
  data() {
    return {
      formType: 'login',
      modal: false,
      error: false,
    }
  },
  computed: {},
})
</script>

<style lang="scss" scoped>
.first-page {
  color: $text-green;
}
</style>
