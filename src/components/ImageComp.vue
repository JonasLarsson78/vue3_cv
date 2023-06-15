<template>
    <img class="img" :src="imgUrl"/>
</template>

<script setup>
  import { onMounted, computed } from 'vue'

  const props = defineProps({
    img: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    }
  })

  const imgUrl = computed(() => {
    return props.img ? new URL('../assets/profile-image.png',import.meta.url).href : new URL('../assets/no-image.webp',import.meta.url).href 
  })

  onMounted(() => {
    changeSize()
  })

  function setSize(size) {
    document.documentElement.style
      .setProperty('--profile-img-size', size + 'px')
  }


  function changeSize() {
    switch (props.size) {
      case 'small':
        setSize(100)
        break

      case 'medium':
        setSize(150)
        break

      case 'large':
        setSize(200)
        break
    
      default:
        setSize(150)
        break
    }
  }
</script>

<style scoped>
.img {
  height: var(--profile-img-size);
  background-color: var(--prime-color);
  border: 2px solid var(--base-color);
  background-blend-mode: multiply;
  border-radius: 120px;
  padding: 20px;
}
</style>