<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
  export default {
    props:['title']
  }
</script>

<style scoped>
  header{
    @apply h-20 flex justify-center items-center mb-8; 
    background: #640032;
  }
  header h1{
    @apply text-white text-2xl
  }
</style>