<template>
    <div>    
      <h1>{{ yearTitle }}</h1>

      <div class="flex">
        <SvgComponentVue icon="code" size="medium"/>
        <h2>{{ content.workTitle }}</h2> 
      </div>

      <ImageComp url="me_commputer.png" size="large" />

      <ListComp :title="content.lists?.about" :list="content.me" icon="info"/>

      <ListContactInfo :title="content.lists?.contact" :list="content.contact" icon="personal"/>

      <ListComp :title="content.lists?.education" :list="content.education" icon="ed"/>
      <ListComp :title="content.lists?.work" :list="content.work" icon="work"/>
      <ListComp :title="content.lists?.language" :list="content.language" icon="lang"/>
      <ListComp :title="content.lists?.skills" :list="content.skills" icon="skills"/>
      <ListComp :title="content.lists?.hobby" :list="content.hobby" icon="hobby"/>
    </div>
</template>

<script setup>
  import ListComp from '../components/ListComp.vue'
  import ListContactInfo from '../components/ListContactInfo.vue'
  import ImageComp from '../components/ImageComp.vue'
  import SvgComponentVue from '../svg/SvgComponent.vue'
  import { computed } from 'vue'
  import { getContent } from '../content'
  import { useLanguageStore } from '../store/index'

  const languageStore = useLanguageStore()

  const yearTitle = computed(() => {
    const now = new Date()
    const year = now.getFullYear()
    return `${year} - Cv - Jonas Larsson`
  })

  const content = computed(() => {
    return getContent(languageStore.getCurrentLanguage)
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