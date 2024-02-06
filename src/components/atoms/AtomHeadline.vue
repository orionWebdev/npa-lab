<template>
  <h :is="h + level" class="text-green font-bold text-4xl">
    {{ text }}
  </h>
</template>

<script>
export default {
  name: 'AtomHeadline',
  props: {
    level: {
      type: Number,
      default: 1,
      validator: function (value) {
        return [1, 2, 3, 4, 5, 6].includes(value)
      }
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
