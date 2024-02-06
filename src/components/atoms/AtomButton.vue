<template>
  <button :class="buttonClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AtomButton',
  props: {
    buttonClass: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
