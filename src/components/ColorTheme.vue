<template>
  <div class="theme-color">
    <label>{{ pageContent.pageColor }}</label>
    <input class="theme-color-picker" type="color" @input="input" :value="colorStore.getCurrentColor" />
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
  const colorQuery = urlQuery.get('color')

  if (colorQuery) {
    localStorage.setItem('base-color', '#' + colorQuery)
  }

  const baseColor = localStorage.getItem('base-color')

  if (!baseColor) {
    const color = getComputedStyle(document.documentElement)
    .getPropertyValue('--base-color')

    colorStore.setCurrentColor(color)
    localStorage.setItem('base-color', color) 
  } else {
    colorStore.setCurrentColor(baseColor)
    document.documentElement.style
    .setProperty('--base-color', baseColor)
  }

  
})

function input(e) {
  const color = e.target.value
  document.documentElement.style
    .setProperty('--base-color', color)
  localStorage.setItem('base-color', color)
  colorStore.setCurrentColor(color)
  
  const urlQuery = new URLSearchParams(window.location.search)
  const c = color.replace('#', '')
  urlQuery.set('color', c)
  window.history.replaceState({}, '', `?${urlQuery}`)
}
</script>

<style scoped>
.theme-color {
  position: absolute;
  top: 20px;
  left: 10px;
  display: flex;
  align-items: center;
}

.theme-color-picker {
  background-color: var(--prime-color);
  border: 2px solid var(--base-color);
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>