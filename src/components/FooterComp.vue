<template>
  <div class="footer">
    <div>Designad av Jonas Larsson</div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--prime-color);
  background: linear-gradient(90deg, var(--prime-color) 60%, var(--base-color) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid var(--base-color);
}
</style>