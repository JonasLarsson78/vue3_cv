import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'se'
  }),
  getters: {
    getCurrentLanguage: (state) => state.currentLanguage,
  },
  actions: {
    setCurrentLanguage(lang) {
      this.currentLanguage = lang
    }
  },
})