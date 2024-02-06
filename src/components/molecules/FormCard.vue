<template>
    <div v-if="showExistingQuestion" :class="borderColor"
        class="flex-1 max-w-sm mt-10 p-6 bg-blue border-grey rounded-lg shadow cursor-pointer transform hover:scale-105 transition ease-in-out delay-60 hover:scale-115 duration-100"
        :style="hoverShadow"
        @click="handleClick">
        <div class="flex flex-row justify-between py-2">
            <p class="font-sm">{{ category }}</p>
        <FontAwesomeIconWrapper :class="circleColor"  :icon="['fas', 'circle']" />
        </div>
       
        <div class="flex flex items-center">
            <p class="font-bold font-xl text-white">{{ title }}</p>
        </div>
    </div>
</template>

<script>
import { useStore } from '../../router/stores/store.js'
import FontAwesomeIconWrapper from '../atoms/FontAwesomeIconWrapper.vue'

export default {
    name: 'FormCard',
    components: {
        FontAwesomeIconWrapper
    },
    props: {
        title: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            required: false
        },
        category: {
            type: String,
            required: true,
            default: 'Kategorie'
        }
    },
    data() {
        return {
            circleColor: this.correct ? 'text-green' : 'text-red',
        }

    },
    setup() {
        const store = useStore()

        return {
            showExistingQuestion: store.$state.showExistingQuestion
        }
    },
    computed: {

    }
}
</script>