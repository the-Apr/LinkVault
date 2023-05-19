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
    toggleNav: Boolean
  },
  
  data() {
    return{
      storedResources: [],
    };
  },
  
  provide (){
    return{
      getResources: () =>this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },

  created(){
    this.$router.push('/storedresources');
  },
  mounted(){  
    fetch("https://learning-resource-app-d3424-default-rtdb.firebaseio.com/resources.json?auth=RdVW03qRcAKgVGrUjMLJyXud3HcmMGZEdlt2M8qr")
    .then(response => {
      if(response.ok){
        return response.json();
      }
    })
    .then(data => {
      // Convert the fetched data into an array
      const resourcesArray = Object.keys(data).map(key => {
        const resource = data[key];
        resource.id = key;
        return resource;
      });
      // Sort the resources by timestamp (assuming you have a timestamp field in your Firebase data)
      resourcesArray.sort((a, b) => b.id.localeCompare(a.id));

      // Set the resources array
      this.storedResources = resourcesArray;
    })
    .catch(error => {
      console.log(error);
    });
  },
    
  methods: {
    addResource(title, description, url){
      console.log('working')
      const newResource= {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };

      fetch("https://learning-resource-app-d3424-default-rtdb.firebaseio.com/resources.json?auth=RdVW03qRcAKgVGrUjMLJyXud3HcmMGZEdlt2M8qr", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newResource)
      }).then(response =>{
        if(response.ok){
          response.json()
        }else{
          throw new Error("Could not submit data. Try again")
        }
      })
      .then(data => {
        // update your storedResources with the new resource returned from Firebase
        newResource.id = data?.name ?? data?.resource?.id;

        this.storedResources.unshift(newResource);
        this.$router.push('/storedresources');
        this.enteredTitle= '',
        this.enteredDescription= '',
        this.enteredUrl= ''
      })
    .catch((error) => {
        console.log(error);
        this.error= error.message;
      });
    },
        
    removeResource(resId){
      const resIndex= this.storedResources.findIndex(res=> res.id === resId);
      this.storedResources.splice(resIndex, 1);

      fetch(`https://learning-resource-app-d3424-default-rtdb.firebaseio.com/resources/${resId}.json?auth=RdVW03qRcAKgVGrUjMLJyXud3HcmMGZEdlt2M8qr`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('wont delete');
          const newDelete = () =>{
           this.deleteConfirm = true;
          }

          newDelete();
          // Resource successfully deleted from the Firebase database
        } else {
          throw new Error('Failed to delete resource from the Firebase database');
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}
</script>