<template>
  <div class="app">
    <app-button>登録</app-button><br />
    <app-button type="danger">登録</app-button><br />
    <app-button type="secondary">登録</app-button><br />
    <app-button type="primary">登録</app-button><br />
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
