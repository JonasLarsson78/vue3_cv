<template>
  <div class="test">
   <ColorTheme />
    <PageLanguage />
    <hr> 
  </div>
  

  <Transition name="fade">
    <LoaderComp v-if="loading" />
    <MyCv v-else />
  </Transition>
  <FooterComp  />
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import ColorTheme from './components/ColorTheme.vue'
  import PageLanguage from './components/PageLanguage.vue'
  import MyCv from './components/MyCv.vue'
  import LoaderComp from './components/LoaderComp.vue'
  import FooterComp from './components/FooterComp.vue'

  const loading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 4500)
  })
</script>

<style scoped>
.fade-enter-active{
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.test {
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  background-color: var(--prime-color);
  background: linear-gradient(90deg, var(--prime-color) 60%, var(--base-color) 100%);
  z-index: 100;
}

hr {
  position: relative;
  top: 60px;
  width: 100vw;
  border-color: var(--base-color);
}
</style>
