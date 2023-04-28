<template>
  <div class="flex">
    <SvgComponent :icon="icon" size="medium" />
    <h2>{{ title }}</h2>
  </div>
  
  <div class="list">
    <div v-for="t in list" :key="t.title" class="list-loop">
      <div class="flex">
        <div class="dott"/>
        <div class="line" />
        <div class="flex">
          <SvgComponent :icon="t.icon" size="small" />
          <div class="title">{{ t.title }}</div> 
        </div>
        
      </div>
      <div class="text">
        <a :href="t.link" target="_blank">{{ t.text }}</a>
      </div>
      <div class="line2"/>
    </div>
  </div>
  <div class="flex">
    <div class="dott2"/> 
    <div class="line-end"/>
    <div class="dott3"/> 
  </div>
</template>

<script setup>
import SvgComponent from '../svg/SvgComponent.vue'
defineProps({
  title: String,
  list: Array,
  icon: String,
})

</script>

<style scoped>

.title-img {
  position: relative;
  top: -8px;
  height: 30px;
  margin-right: 10px;
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.list {
  border-left: 2px solid var(--base-color);
  padding-bottom: 2px;
}

.list-loop{
  position: relative;
  left: -5px;
  top: -15px;
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
  width: 55px;
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
  left: 95px;
  margin-bottom: 15px;
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
