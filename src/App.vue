<template>
  <ColorTheme />
  <h1>{{ yearTitle }}</h1>

  <div class="flex">
    <SvgComponentVue icon="code" size="medium"/>
    <h2>Systemutvecklare</h2> 
  </div>
  
  <img class="me-img" src="./assets/me_commputer.png"/>

  <List title="Om Mig" :list="me" icon="info"/>

  <ListContactInfo title="Kontakta Mig" :list="contact" icon="personal"/>

  <List title="Utbildning" :list="ed" icon="ed"/>
  <List title="Arbetslivserfarenhet" :list="work" icon="work"/>
  <List title="Språk" :list="lang" icon="lang"/>
  <List title="Färdigheter" :list="skills" icon="skills"/>
  <List title="Hobbys & Intressen" :list="hobby" icon="hobby"/>

</template>

<script setup>
import List from './components/List.vue'
import ListContactInfo from './components/ListContactInfo.vue'
import SvgComponentVue from './svg/SvgComponent.vue';
import ColorTheme from './components/ColorTheme.vue';
import { computed } from 'vue';
import { ed, work, lang, skills, hobby, contact, me } from './content/index'

const yearTitle = computed(() => {
  const now = new Date()
  const year = now.getFullYear()
  return `${year} - Cv - Jonas Larsson`
})
</script>

<style scoped>
h1 {
  margin: 0;
  margin-top: 30px;
}

h2 {
  margin-left: 10px;
}

.icon {
  position: relative;
  top: -3px;
  width: 40px;
}

.me-img {
  height: 200px;
  background-color: var(--prime-color);
  border: 2px solid var(--base-color);
  background-blend-mode: multiply;
  border-radius: 120px;
  padding: 20px;
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 10px;
}
</style>
