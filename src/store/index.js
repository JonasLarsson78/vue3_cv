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
    currentPrimeColor: '',
    currentBaseColor: ''
  }),
  getters: {
    getCurrentPrimeColor: (state) => state.currentPrimeColor,
    getCurrentBaseColor: (state) => state.currentBaseColor,
  },
  actions: {
    setCurrentPrimeColor(color) {
      this.currentPrimeColor = color
    },
    setCurrentBaseColor(color) {
      this.currentBaseColor = color
    }
  },
})