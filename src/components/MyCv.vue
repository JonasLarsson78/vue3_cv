<template>
    <div>    
      <h1>{{ yearTitle }}</h1>

      <div class="flex">
        <SvgComponentVue icon="code" size="medium"/>
        <h2>{{ pageContent.workTitle }}</h2> 
      </div>

      <img class="me-img" src="../assets/me_commputer.png"/>

      <ListComp :title="pageContent.lists?.about" :list="pageContent.me" icon="info"/>

      <ListContactInfo :title="pageContent.lists?.contact" :list="pageContent.contact" icon="personal"/>

      <ListComp :title="pageContent.lists?.education" :list="pageContent.education" icon="ed"/>
      <ListComp :title="pageContent.lists?.work" :list="pageContent.work" icon="work"/>
      <ListComp :title="pageContent.lists?.language" :list="pageContent.language" icon="lang"/>
      <ListComp :title="pageContent.lists?.skills" :list="pageContent.skills" icon="skills"/>
      <ListComp :title="pageContent.lists?.hobby" :list="pageContent.hobby" icon="hobby"/>
    </div>
</template>

<script setup>
  import ListComp from '../components/ListComp.vue'
  import ListContactInfo from '../components/ListContactInfo.vue'
  import SvgComponentVue from '../svg/SvgComponent.vue'
  import { computed } from 'vue'
  import { content } from '../content/index'
  import { useLanguageStore } from '../store/index'

  const languageStore = useLanguageStore()

  const yearTitle = computed(() => {
    const now = new Date()
    const year = now.getFullYear()
    return `${year} - Cv - Jonas Larsson`
  })

  const pageContent = computed(() => {
    return content(languageStore.getCurrentLanguage)
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