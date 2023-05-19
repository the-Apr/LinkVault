<template>
  
  <base-dialog title="Succesfully deleted" @close="deleted" v-if="deleteConfirm">
    <template #default>
      <p>xyz has been deleted</p>
    </template>
    <template v-slot:actions>
      <base-button @click="deleted">Okay</base-button>
    </template>
  </base-dialog>


  <li class="">
    <base-card class="mb-4">
      <header class="grid grid-cols-5 gap-4 mb-4">
        <div class="col-span-3">
          <h3 class="text-xl font-bold">{{ title }}</h3>
        </div>
        <div class="col-end-6 justify-self-end">            
          <base-button mode= 'flat' @click="removeResource(id)">Delete</base-button>
        </div>
      </header>
      <p class="mb-2"> {{ description }}</p>
      <a :href= 'link' class="text-orange-400 hover:underline">View resources</a>
    </base-card>
  </li>
</template>

<script>
export default {
  
  props:{
    id: String,
    title: String,
    description: String,
    link: String,
    // deleteConfirm: {
    //   type: Boolean,
    //   default: false,
    // },
    // deleted: Function
  },

  data(){
    return{
      deleteConfirm: false,
    }
  },

  inject:['removeResource'],
  methods: {
    deleted(){
      this.deleteConfirm= false;
    }
  }
} 
</script>