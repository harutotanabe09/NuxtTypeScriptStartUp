<template>
  <div class="app">
    <app-button>ボタン</app-button><br />
    <app-button type="danger">ボタン</app-button><br />
    <app-button type="secondary">ボタン</app-button><br />
    <app-button type="primary">ボタン</app-button><br />
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
