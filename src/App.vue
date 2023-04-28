<template>
  <ColorTheme />
  <Transition name="fade">
    <Loader v-if="loading" />
    <Cv v-else />
  </Transition>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  import ColorTheme from './components/ColorTheme.vue'
  import Cv from './components/Cv.vue'
  import Loader from './components/Loader.vue'

  const loading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      loading.value = false
    }, 4500);
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
</style>
