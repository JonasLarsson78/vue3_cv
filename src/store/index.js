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

export const useColorStore = defineStore('color', {
  state: () => ({
    currentColor: '#0e53dd'
  }),
  getters: {
    getCurrentColor: (state) => state.currentColor,
  },
  actions: {
    setCurrentColor(color) {
      this.currentColor = color
    }
  },
})