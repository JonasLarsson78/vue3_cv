<template>
  <div class="theme-color">
    <label>Sidfärg:</label>
    <input class="theme-color-picker" type="color" @input="input" :value="colorValue" />
  </div>
  <hr>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const colorValue = ref('#000000')

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

    colorValue.value = color
    localStorage.setItem('base-color', color) 
  } else {
    colorValue.value = baseColor
    document.documentElement.style
    .setProperty('--base-color', baseColor)
  }

  
})

function input(e) {
  const color = e.target.value
  document.documentElement.style
    .setProperty('--base-color', color)
  localStorage.setItem('base-color', color)
  
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

hr {
  position: relative;
  left: -60px;
  width: 100vw;
  border-color: var(--base-color);
}
</style>