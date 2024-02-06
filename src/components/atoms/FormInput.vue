<template>
    <div class="flex flex-col">
        <label :for="id" class=" mb-2 text-sm font-semibold text-lg text-green">
            {{ label }}
        </label>
        <input
            class="bg-gray-50 h-10 p-4 border border-gray-300 text-black text-sm rounded-lg focus:ring-green focus:border-green block p-2."
            :placeholder="placeholder"/>
    </div>
</template>

<script>
export default {
    name: 'FormInput',
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        id: {
            type: String,
            required: true,
            default: ''
        },
        text: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
