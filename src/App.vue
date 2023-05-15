<template>
  <div class="">
    <the-header title='Learning Resources Stack' :show="showNav"></the-header>
    <div class="lg:container grid grid-cols-4 gap-3">
      <the-resources :toggleNav="toggleNav"></the-resources>
      
    </div>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue'

export default {
  components: {
    TheHeader,TheResources
  },
  data(){
    return{
      toggleNav: false,
    }
  },
  
  methods:{
    showNav(){
        this.toggleNav =!this.toggleNav;
      },
  }
}
</script>