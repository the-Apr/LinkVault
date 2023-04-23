<template>
  <base-card>
    <router-link to="/storedresources"> 
    <base-button :mode= "{'flat': $route.path !== '/storedresources'}">Stored Resources</base-button> 
    </router-link>

    <router-link to="/add"> 
    <base-button :mode= "{'flat': $route.path !== '/add'}">Add Resources</base-button> 
    </router-link>

    <!-- <base-button  @click="setSelectedTab('stored-resources')"
    :mode= 'storedResButtonMode'> Stored Resources
    </base-button> -->
    <!-- <base-button  @click="setSelectedTab('add-resources')"
    :mode= 'addResButtonMode'> Add Resources
    </base-button> -->

  </base-card>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive> 
  </router-view>
</template>

<script>
// import StoredResources from './StoredResources.vue';
// import AddResources from './AddResources.vue';

export default {
  components: {
    // StoredResources,
    // AddResources,
  },
  created(){
    this.$router.push('/storedresources')
  },
  data() {
    return{
      // selectedTab: 'storedResources',
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
  
  computed : {
    // storedResButtonMode(){
    //   return this.$route.path === '/storedresources' ? null : 'flat'
    // },
    // addResButtonMode(){
    //   return this.$route.path === '/add' ? null : 'flat'
    // },
    // addResButtonMode(){
      //   return this.selectedTab === 'add-resources' ? null : 'flat'
      // }
    },
    
    methods: {
      // setSelectedTab(tab){
        //   this.selectedTab= tab;
        // },
        
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