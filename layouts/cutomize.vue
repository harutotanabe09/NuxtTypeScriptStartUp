<template>
  <div class="pc-layout">
    <side-menu class="side" />
    <div class="body">
      <div>Common Layout</div>
      <Nuxt class="content" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.pc-layout {
  display: flex;
  background-position: left top;
  background-size: 100% auto;
  > .side {
    align-self: stretch;
    z-index: 1;
  }
  > .body {
    > .content {
      margin: 20px;
    }
    > .footer {
      margin-top: 51px;
    }
  }
}
</style>
