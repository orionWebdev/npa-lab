<template>
    <div class="w-full">
        <FormHeader />
        <div v-if="!newQuestion" class="form-organism flex flex-col items-center">
            <FormStatement :label="inputLabelOne" />
            <div class="mt-5">
                <div>
                    <p class="font-semi-bold text-white text-xs sm:text-sm md:text-base">
                        Möchtest du die Aussage mit einer
                        vorhanden Aussage verknüpfen?
                    </p>
                </div>
            </div>
            <div class="flex flex-row mt-5 items-center space-x-10">
                <AtomButton @click="onTrueButtonClick()"
                    class="bg-white hover:bg-green text-green hover:text-white hover:border-green font-bold py-2 px-4 rounded-full">
                    Ja
                </AtomButton>
                <AtomButton @click="falseClick"
                    class="bg-white hover:bg-red text-red hover:text-white hover:border-green font-bold py-2 px-4 rounded-full">
                    Nein
                </AtomButton>
            </div>
        </div>
        <div v-if="newQuestion" class="form-organism flex flex-col items-center justify-center">
            <FormStatement :label="inputLabelTwo" />
            <div class="flex flex-row items-center space-x-10 mt-10">
                <AtomButton @click="previousClick"
                    class="text-blue hover:text-blue hover:border-blue rounded-full transition ease-in-out delay-60 hover:scale-125 duration-100">
                    <FontAwesomeIconWrapper :icon="['fas', 'arrow-left']" :class="'size-6 text-white'" />
                </AtomButton>
                <AtomButton
                    class="bg-white hover:bg-green text-green hover:text-white hover:border-green font-bold py-2 px-4 rounded-full">
                    Bestätigen
                </AtomButton>
            </div>
        </div>
    </div>
</template>

<script>
import FormHeader from '@/components/molecules/FormHeader.vue'
import FormStatement from '@/components/molecules/FormStatement.vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
import FontAwesomeIconWrapper from '@/components/atoms/FontAwesomeIconWrapper.vue'
import { useStore } from '../../router/stores/store.js'
import { watchEffect } from 'vue'

export default {
    name: 'FormOrganism',
    components: {
        FormHeader,
        AtomButton,
        FormStatement,
        FontAwesomeIconWrapper
    },
    setup() {
        const store = useStore()

        const onTrueButtonClick = () => {
            store.setShowExistingQuestion(true)
        }

        const onFalseButtonClick = () => {
            store.setShowExistingQuestion(false)
        }

        return {
            showExistingQuestion: store.$state.showExistingQuestion,
            onTrueButtonClick,
            onFalseButtonClick
        }
    },
    data() {
        return {
            newQuestion: false,
            inputLabelOne: 'Aussage A',
            inputLabelTwo: 'Aussage B',
            inputLabelTwoText: 'Erklärung zu Aussage B',
        }
    },
    methods: {
        falseClick() {
            this.newQuestion = true
            this.onFalseButtonClick();
        },

        previousClick() {
            this.newQuestion = false
            this.existingQuestion = false
        }
    }
}
</script>
