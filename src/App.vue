<template>
  <ColorTheme />
  <PageLanguage />
  <hr>

  <Transition name="fade">
    <LoaderComp v-if="loading" />
    <MyCv v-else />
  </Transition>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import ColorTheme from './components/ColorTheme.vue'
  import PageLanguage from './components/PageLanguage.vue'
  import MyCv from './components/MyCv.vue'
  import LoaderComp from './components/LoaderComp.vue'

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

hr {
  position: relative;
  left: -60px;
  width: 100vw;
  border-color: var(--base-color);
}
</style>
