<template>
  <div class="container">
    <h2>Laddar CV...</h2>
    <div class="flex">
      <span class="loader"></span>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 100px;
  border: 2px solid var(--base-color);
  border-radius: 15px;
  padding: 15px;
  background:var(--prime-color);
}

h2 {
  text-align: center;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}


.loader{
        display: block;
        position: relative;
        height: 12px;
        width: 80%;
        border: 2px solid var(--base-color);
        border-radius: 10px;
        overflow: hidden;
      }
      .loader:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background: var(--base-color);
        filter: var(--base-link-color-filter);
        animation: 4.5s prog ease-in infinite;
      }
      
      @keyframes prog {
        to  {   width: 100%;}
      }
      
  
</style>