<template>
  <Ed v-if="icon === 'ed'" :class="size"/>
  <Code v-if="icon === 'code'" :class="size"/>
  <Github v-if="icon === 'github'" :class="size"/>
  <Hobby v-if="icon === 'hobby'" :class="size"/>
  <Home v-if="icon === 'home'" :class="size"/>
  <Info v-if="icon === 'info'" :class="size"/>
  <Lang v-if="icon === 'lang'" :class="size"/>
  <Linkedin v-if="icon === 'linkedin'" :class="size"/>
  <Mail v-if="icon === 'mail'" :class="size"/>
  <Personal v-if="icon === 'personal'" :class="size"/>
  <Phone v-if="icon === 'phone'" :class="size"/>
  <Skills v-if="icon === 'skills'" :class="size"/>
  <Work v-if="icon === 'work'" :class="size"/>
  <Ring v-if="icon === 'ring'" :class="size"/>
</template>

<script setup>
import Ed from './SvgEd.vue'
import Code from './SvgCode.vue'
import Github from './SvgGithub.vue'
import Hobby from './SvgHobby.vue'
import Home from './SvgHome.vue'
import Info from './SvgInfo.vue'
import Lang from './SvgLang.vue'
import Linkedin from './SvgLinkedin.vue'
import Mail from './SvgMail.vue'
import Personal from './SvgPersonal.vue'
import Phone from './SvgPhone.vue'
import Skills from './SvgSkills.vue'
import Work from './SvgWork.vue'
import Ring from './SvgRing.vue'

const props = defineProps({
  icon: String,
  size: {
    type: String,
    required: false,
    default: 'medium',
  },
})
</script>

<style scoped>
.small {
  height: 20px;
}

.medium {
  height: 30px;
}

.large {
  height: 40px;
}
</style>