<template>
  <div class="theme-color">
    <label>{{ pageContent.pageColor }}</label>
    <input
      class="theme-color-picker"
      type="color" 
      @input="inputBase"
      :value="colorStore.getCurrentBaseColor" />
    <span class="theme-color-margin"/>
    <label>{{ pageContent.backColor }}</label>
    <input
      class="theme-color-picker"
      type="color" @input="inputPrime"
      :value="colorStore.getCurrentPrimeColor" />
    <button
      class="theme-color-reset"
      @click="reset">
      {{ pageContent.resetButton }}
    </button>
  </div>
</template>

<script setup>
import { content } from '../content/index'
import { onMounted, computed } from 'vue'
import { useLanguageStore, useColorStore } from '../store/index'

const languageStore = useLanguageStore()
const colorStore = useColorStore()

const pageContent = computed(() => {
    return content(languageStore.getCurrentLanguage)
  })

onMounted(() => {
  const urlQuery = new URLSearchParams(window.location.search)
  const colorBaseQuery = urlQuery.get('base-color')
  const colorPrimeQuery = urlQuery.get('prime-color')

  if (colorBaseQuery) {
    localStorage.setItem('base-color', '#' + colorBaseQuery)
  }
  if (colorPrimeQuery) {
    localStorage.setItem('prime-color', '#' + colorPrimeQuery)
  }

  const baseColor = localStorage.getItem('base-color')
  const primeColor = localStorage.getItem('prime-color')

  if (!baseColor) {
    const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--base-color')

    colorStore.setCurrentBaseColor(color)
    localStorage.setItem('base-color', color) 
  } else {
    colorStore.setCurrentBaseColor(baseColor)
    document.documentElement.style
    .setProperty('--base-color', baseColor)
  }

  if (!primeColor) {
    const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--prime-color')

    colorStore.setCurrentPrimeColor(color)
    localStorage.setItem('prime-color', color) 
  } else {
    colorStore.setCurrentPrimeColor(primeColor)
    document.documentElement.style
    .setProperty('--prime-color', primeColor)
  }

  
})

function inputBase(e) {
  const color = e.target.value
  document.documentElement.style
    .setProperty('--base-color', color)
  localStorage.setItem('base-color', color)
  colorStore.setCurrentBaseColor(color)
  
  const urlQuery = new URLSearchParams(window.location.search)
  const c = color.replace('#', '')
  urlQuery.set('base-color', c)
  window.history.replaceState({}, '', `?${urlQuery}`)
}

function inputPrime(e) {
  const color = e.target.value
  document.documentElement.style
    .setProperty('--prime-color', color)
  localStorage.setItem('prime-color', color)
  colorStore.setCurrentPrimeColor(color)
  
  const urlQuery = new URLSearchParams(window.location.search)
  const c = color.replace('#', '')
  urlQuery.set('prime-color', c)
  window.history.replaceState({}, '', `?${urlQuery}`)
}

function reset() {
  localStorage.removeItem('prime-color')
  localStorage.removeItem('base-color')
  colorStore.setCurrentPrimeColor('')
  colorStore.setCurrentBaseColor('')
  window.history.replaceState({}, document.title, '/' + '')
  location.reload()
}
</script>

<style scoped>
.theme-color {
  position: absolute;
  top: 20px;
  right: 25px;
  display: flex;
  align-items: center;
  color: var(--prime-color);
}

.theme-color-picker {
  background-color: var(--prime-color);
  border: 2px solid var(--base-color);
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.theme-color-margin {
  margin-left: 10px;
}

.theme-color-reset {
  margin-left: 10px;
  border-radius: 5px;
  height: 28px;
  font-size: 16px;
  color: var(--base-color);
  border: 2px solid var(--base-color);
  background-color: var(--prime-color);
  cursor: pointer;
}

.theme-color-reset:hover {
  opacity: 0.7;
}
</style>