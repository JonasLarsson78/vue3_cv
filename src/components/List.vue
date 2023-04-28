<template>
  <div class="flex">
    <SvgComponent :icon="icon" size="medium" />
    <h2>{{ title }}</h2>
  </div>
  <div class="list">
    <div v-for="t in list" :class="['list-loop', { hover: t.modal }]" >
      <div class="flex">
        <div class="dott"/>
        <div class="line" />

        <div class="flex">
          <SvgComponent v-if="t.modal" icon="info" size="small" />
          <SvgComponent v-else icon="ring" size="small" />
          <div class="title" @click="toggleModal(t)">{{ t.title }}</div>
        </div>
        
      </div>
      <div class="text text-modal" @click="toggleModal(t)">{{ t.text }}</div>
      <div class="line2"/>
    </div>
  </div>
  <div class="flex">
    <div class="dott2"/> 
    <div class="line-end"/>
    <div class="dott3"/> 
  </div>
  <Modal
    :showModal="show"
    :modalContent="modalContent"
    @close="closeModal"
  />

</template>

<script setup>
import { computed, ref } from 'vue'
import Modal from './Modal.vue'
import SvgComponent from '../svg/SvgComponent.vue'

const show = ref(false)
const currentTitle = ref('')
const currentText = ref('')
const currentLink = ref('')
const currentLinkTitle = ref('')

const props = defineProps({
  title: String,
  list: Array,
  icon: String,
})

const modalContent = computed(() => {
  return { 
    title: currentTitle.value,
    text: currentText.value,
    link: currentLink.value,
    linkTitle: currentLinkTitle.value
  }
})

function toggleModal(t) {
  if (t.modal) {
    currentTitle.value = t.modalTitle
    currentText.value = t.modalText
    currentLink.value = t.modalLink
    currentLinkTitle.value = t.modalLinkTitle
    show.value = !show.value
  }
}
function closeModal() {
  show.value = false
}
</script>

<style scoped>


.icon {
  position: relative;
  top: -6px;
  height: 30px;
  margin-right: 10px;
}

.info {
  position: relative;
  top: 0;
  width: 20px;
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.list {
  border-left: 2px solid var(--base-color);
  padding-bottom: 2px;
}

.list-loop {
  position: relative;
  left: -5px;
  top: -15px;
  cursor: default;
}

.hover:hover {
  color: var(--base-color);
  filter: var(--base-link-color-filter);
  cursor: pointer;
}

.dott {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--base-color);
}
.dott2 {
  position: relative;
  top: -10px;
  left: -3px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: var(--base-color);
}
.dott3 {
  position: relative;
  top: -10px;
  left: -3px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: var(--base-color);
}

.line {
  width: 50px;
  border-top: 2px solid var(--base-color);
}

.line-end {
  position: relative;
  top: -10px;
  left: -3px;
  width: 700px;
  border-top: 2px solid var(--base-color);
}

.title {
  padding: 4px;
  font-size: 20px;
}

.text {
  position: relative;
  left: 65px;
  margin-bottom: 15px;
  max-width: 600px;
}

.text-modal {
  left: 94px;
}

@media all and (max-width: 767px) {
  .text {
    position: relative;
    left: 65px;
    margin-bottom: 15px;
    max-width: 220px;
  }

  .dott3 {
    position: relative;
    top: -10px;
    left: -8px;
    width: 38px;
    height: 15px;
    border-radius: 30px;
    background-color: var(--base-color);
  }
}

</style>
