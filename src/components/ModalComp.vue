<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="showModal" class="container" >
        <div class="centered">
          <div class="close" @click="close">✕</div>
          <div class="content">
            <h2 v-if="modalContent.title">
              {{ modalContent.title }}
            </h2>
            <p v-if="modalContent.text">
              {{ modalContent.text }}
            </p>
            <div>
              <a
                v-if="modalContent.link"
                :href="modalContent.link"
                target="_blank"
                >
                {{ modalContent.linkTitle }}
              </a>
            </div>
            <div class="flex-center">
              <button class="btn" @click="close">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onUpdated } from 'vue'
const emit = defineEmits(['close'])

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
  modalContent: {
    type: Object,
    required: true,
  }
})

onUpdated(() => {
  const body = document.querySelector('body')
  if (props.showModal) {
    body.style.overflowY = 'hidden'
  } else {
    body.style.overflowY = 'scroll'
  }
})

function close() {
  emit('close')
}
</script>

<style scoped>

.container {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    text-align:center;
    background:#000000B0;
}
.centered {
    position: relative;
    padding: 15px;
    background:var(--prime-color);
    border: 2px solid var(--base-color);
    border-radius:15px;
    display:inline-block;
    vertical-align:middle;
    min-width:400px;
    margin:10px;
    z-index: 900;
}
.container:before {
    content:"";
    display:inline-block;
    width:0;
    height:100%;
    vertical-align:middle;
}

.close {
  position: absolute;
  right: 10px;
  top: 0px;
  cursor: pointer;
  font-size: 30px;
}

.content {
  width: 400px;
  text-align: left;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 100px;
  height: 25px;
  border-radius: 5px;
  margin-top: 30px;
  font-size: 16px;
  color: var(--base-color);
  border: 2px solid var(--base-color);
  background-color: var(--prime-color);
  cursor: pointer;
}

.btn:hover {
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>