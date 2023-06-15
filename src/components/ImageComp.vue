<template>
    <img class="img" :src="imgUrl(props.url)"/>
</template>

<script setup>
import { onMounted } from 'vue'
  const props = defineProps({
    url: {
      type: String,
      required: false,
      default: 'no-image.webp'
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    }
  })

  const imgUrl = (fileName) => {
    const base = document.location.origin
    const noImage = base  + '/src/assets/no-image.webp'
    const image = base + '/src/assets/' + fileName

    return imageExists(base + '/src/assets/' + fileName) ?
    image :
    noImage
  }

  onMounted(() => {
    changeSize()
  })

  function setSize(size) {
    document.documentElement.style
      .setProperty('--profile-img-size', size + 'px')
  }

  function imageExists(image_url){

    const http = new XMLHttpRequest()

    http.open('HEAD', image_url, false)
    http.send()

    return http.status !== 404

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