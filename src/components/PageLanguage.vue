<template>
  <div class="page-language">
    <label>{{ pageContent.pageLanguage }}</label>
   <select class="page-language-select" @input="input" :value="languageStore.getCurrentLanguage">
    <option
      v-for="o in pageContent.languageOptions"
      :key="o.value" :value="o.value">{{ o.text }}</option>
    </select> 
  </div>
  
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { content } from '../content/index'
import { useLanguageStore } from '../store/index'

const languageStore = useLanguageStore()

const pageContent = computed(() => {
    return content(languageStore.getCurrentLanguage)
  })

function input(e) {
  const value = e.target.value
  languageStore.setCurrentLanguage(value)

  localStorage.setItem('cv-language', value)
}

onMounted(() => {
  const language = localStorage.getItem('cv-language')
  if (language) {
    languageStore.setCurrentLanguage(language)
  }
})
</script>

<style scoped>
.page-language {
  position: absolute;
  top: 20px;
  left: 190px;
  display: flex;
  align-items: center;
}

.page-language-select {
  height: 27px;
  background-color: var(--prime-color);
  border: 2px solid var(--base-color);
  color: var(--base-color);
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>