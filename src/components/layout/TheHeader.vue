<template>
  <header class="flex flex-row">
    <div class= "text-xl md:basis-0 basis-1/12" @click="show">
      <i class="fa fa-bars cursor-pointer lg:hidden " aria-hidden="true"></i>
    </div>
    <div class="md:basis-full basis-11/12">
      <h1 class="font-dancescript">{{title}}</h1>
    </div>
  </header>
  
</template>

<script>
  export default {

    props: {
      title: String,
      show: Function
    },
    
    emits: ['show'],
    data(){
      return{};
    },
    
    methods: {},
  }
</script>

<style scoped>
  header{
    @apply h-14 space-x-3 flex flex-row items-center px-8 mb-4  text-white;  
    background: #640032;
  }
  header h1{
    @apply text-2xl text-center
  }
  .brr{
    border: #fff;
  }
</style>