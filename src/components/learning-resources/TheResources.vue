<template>
  <base-card class="lg:col-span-1 lg:flex flex-col items-center gap-4 hidden">
    <router-link to="/storedresources"> 
    <base-button :mode= "{'flat': $route.path !== '/storedresources'}" class="transition-all hover:ease-out ease-in duration-700">Stored Resources</base-button> 
    </router-link>

    <router-link to="/add"> 
    <base-button :mode= "{'flat': $route.path !== '/add'}">Add Resources</base-button> 
    </router-link>
  </base-card>

  <base-card class="flex flex-col items-center gap-4 lg:hidden col-span-4" v-show="toggleNav">
    <router-link to="/storedresources"> 
    <base-button :mode= "{'flat': $route.path !== '/storedresources'}">StoreResources</base-button> 
    </router-link>

    <router-link to="/add"> 
    <base-button :mode= "{'flat': $route.path !== '/add'}">Add Resources</base-button> 
    </router-link>
  </base-card>

  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive> 
  </router-view>
</template>

<script>
export default {
  props: {
    showNav: Boolean,
    toggleNav: Boolean
  },

  components: {},

  created(){
    this.$router.push('/storedresources');
  },

  data() {
    return{
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official vue.js documentation',
          link: 'https://vuejs.org/guide/introduction.html'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com'
        },
        {
          id: 'stackoverflow',
          title: 'Stack Overflow',
          description: 'Acommunity of developers for help',
          link: 'https://stackoverflow.com'
        },
      ]
    };
  },
  
  provide (){
    return{
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  
  computed : {},
    
  methods: {
    addResource(title, description, url){
      const newResource= {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.$router.push('/storedresources');
      this.enteredTitle= '',
      this.enteredDescription= '',
      this.enteredUrl= ''
    },
        
    removeResource(resId){
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id !== resId
      // );
      // console.log(this.storedResources.length);
      const resIndex= this.storedResources.findIndex(res=> res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  }
}
</script>