<template>
  <div class="app">
    <div class="first-page">aaaaqqaaaaa</div>
    <app-button>登録</app-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButton from '~/components/ui/AppButton.vue'
export default Vue.extend({
  components: { AppButton },
  layout: 'cutomize',
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
