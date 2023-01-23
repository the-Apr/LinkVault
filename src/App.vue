<template>
  <div class="">
    <the-header title= 'Resources Stack'></the-header>
    <div class="container">
      <the-resources></the-resources>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue'

export default {
  components: {
    TheHeader,
    TheResources,
  },
  data(){
    return{
     
    }
  },
}
</script>