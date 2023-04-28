<template>
    <div>    
      <h1>{{ yearTitle }}</h1>

      <div class="flex">
        <SvgComponentVue icon="code" size="medium"/>
        <h2>Systemutvecklare</h2> 
      </div>

      <img class="me-img" src="../assets/me_commputer.png"/>

      <ListComp title="Om Mig" :list="me" icon="info"/>

      <ListContactInfo title="Kontakta Mig" :list="contact" icon="personal"/>

      <ListComp title="Utbildning" :list="ed" icon="ed"/>
      <ListComp title="Arbetslivserfarenhet" :list="work" icon="work"/>
      <ListComp title="Språk" :list="lang" icon="lang"/>
      <ListComp title="Färdigheter" :list="skills" icon="skills"/>
      <ListComp title="Hobbys & Intressen" :list="hobby" icon="hobby"/>
    </div>
</template>

<script setup>
  import ListComp from '../components/ListComp.vue'
  import ListContactInfo from '../components/ListContactInfo.vue'
  import SvgComponentVue from '../svg/SvgComponent.vue'
  import { computed } from 'vue'
  import { ed, work, lang, skills, hobby, contact, me } from '../content/index'

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