<template>
  <div class="first-page">aaa</div>
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
.login-page {
  > .logo {
    display: block;
    width: 230px;
    height: 230px;
    margin: 60px auto;
    object-fit: contain;
  }
  > .container {
    width: 270px;
    margin: 0 auto;
  }
  > .modal {
    width: 100%;
    height: 100%;
    .container {
      display: flex;
      width: 690px;
      height: 340px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .icons > .icon {
        width: 55px;
        height: 55px;
        margin: 84px auto 21px;
      }
      > .message {
        margin: 0;
        text-align: center;
        white-space: pre-wrap;
      }
      > .button {
        margin: 60px auto 33px;
      }
    }
  }
}
</style>
