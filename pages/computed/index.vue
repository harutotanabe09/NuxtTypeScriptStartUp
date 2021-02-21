<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>Now: "{{ now }}"</p>
    <div :class="{ active: isActive }">active</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      message: 'hello world',
      isActive: false,
    }
  },
  // 算出プロパティはリアクティブな依存関係にもとづきキャッシュされる
  computed: {
    reversedMessage(): string {
      return this.$data.message.split('').reverse().join('')
    },
    now(): number {
      return Date.now()
    },
  },
})
</script>

<style lang="scss" scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
