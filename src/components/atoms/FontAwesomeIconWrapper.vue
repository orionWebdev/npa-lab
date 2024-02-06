<template>
     <font-awesome-icon :class="iconClass"  :icon="icon" />
</template>

<script>
export default {
    name: 'FontAwesomeIconWrapper',
    props: {
        icon: {
            type: Array,
            required: true
        },
        iconClass: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>