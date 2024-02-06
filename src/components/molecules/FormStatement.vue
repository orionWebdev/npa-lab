<template>
    <div class="mt-14 flex flex-col items-center w-full">
        <FormInput class="w-2/5" :label="label" />
        <div class="flex flex-row place-items-start">
            <AtomCheckbox label="Ist die Aussage wahr?" class="mt-4"></AtomCheckbox>
        </div>
        
    </div>
    <div class="mt-8 flex flex-col items-center w-full">
        <FormInput class="w-2/5" :label="'Erklärung zu ' + label" />
    </div>
</template>

<script>
import FormInput from '@/components/atoms/FormInput.vue'
import AtomCheckbox from '@/components/atoms/AtomCheckbox.vue'

export default {
    name: 'FormStatement',
    components: {
        FormInput,
        AtomCheckbox
    },
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
    }
}
</script>
