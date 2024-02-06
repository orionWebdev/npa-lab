import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    showExistingQuestion: false
  }),
  actions: {
    setShowExistingQuestion(value) {
      console.log('setShowExistingQuestion was called with value:', value)
      this.showExistingQuestion = value
    }
  }
})
