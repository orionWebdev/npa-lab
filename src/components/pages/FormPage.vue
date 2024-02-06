<template>
    <div class="">
        <FormOrganism />
        <ExistingQuestion v-if="showExistingQuestion"></ExistingQuestion>
    </div>
</template>
<script>
import { useStore } from '../../router/stores/store.js'
import { computed } from 'vue'
import FormOrganism from '../organisms/FormOrganism.vue'
import ExistingQuestion from '../organisms/ExistingQuestion.vue';

export default {
    name: 'FormPage',
    components: {
        FormOrganism,
        ExistingQuestion
    },
    setup() {
        const store = useStore()

        const showExistingQuestion = computed(() => store.$state.showExistingQuestion)

        return {
            showExistingQuestion
        }
    }
}
</script>

<style></style>
