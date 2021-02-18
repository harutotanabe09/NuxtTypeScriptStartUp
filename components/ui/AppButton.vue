<template>
  <button
    class="app-button"
    :class="{
      '-default': type === 'default',
      '-primary': type === 'primary',
      '-secondary': type === 'secondary',
      '-danger': type === 'danger',
      '-white': type === 'white',
    }"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
})
</script>

<style lang="scss" scoped>
.app-button {
  padding: 10px 30px;
  font-size: $font-size-app-button;
  font-weight: $font-weight-app-button;
  line-height: $lh-app-button;
  text-align: center;
  cursor: pointer;
  border-radius: 27px;
  outline: none;
  &.-default {
    color: $text-app-button-default;
    background-color: $bg-app-button-default;
    border: 1px solid $border-app-button-default;
    &:hover {
      color: $text-app-button-default-hover;
      background-color: $bg-app-button-default-hover;
    }
  }
  &.-primary {
    color: $text-app-button-primary;
    background: $bg-app-button-primary;
    box-shadow: $box-shadow-app-button-primary;
    &:hover {
      background: $bg-app-button-primary-hover;
    }
  }
  &.-secondary {
    color: $text-app-button-primary;
    background: $bg-app-button-secondary;
    box-shadow: $box-shadow-app-button-secondary;
    &:hover {
      color: $text-app-button-secondary-hover;
      background: $bg-app-button-secondary-hover;
    }
  }
  &.-danger {
    color: $text-app-button-danger;
    background-color: $bg-app-button-danger;
    border: 1px solid $border-app-button-danger;
    &:hover {
      color: $text-app-button-danger-hover;
      background: $bg-app-button-danger-hover;
    }
  }
  &.-white {
    color: $text-app-button-white;
    background-color: $bg-app-button-white;
  }
  &:disabled {
    color: $text-app-button-disable;
    cursor: default;
    background: $bg-app-button-disable;
    &:hover {
      color: $text-app-button-disable;
      background: $bg-app-button-disable;
    }
  }
}
</style>
