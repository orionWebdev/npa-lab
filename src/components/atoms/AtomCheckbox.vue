<template>
  <div class="flex items-center">
    <input
      id="link-checkbox"
      type="checkbox"
      value=""
      class="w-6 h-6 text-gray-100 bg-gray-100 rounded-10 focus:ring focus:ring-2"
    />
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-white">{{ label }} </label>
  </div>
</template>

<script>
export default {
  name: 'AtomCheckbox',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
