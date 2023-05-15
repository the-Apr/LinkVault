<template>
  <base-dialog v-if="inputisInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, one input value is invalid</p>
    </template>
    <template v-slot:actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>

  <div class="lg:col-span-3 col-span-4">
  <base-card>
    <form action="" @submit="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput">
      </div>
      <div>
        <base-button type= "submit" >Add Resource </base-button>
      </div>
    </form>
  </base-card>
</div>
</template>

<script>

export default {
  inject: ['addResource',],
  data(){
    return{
      inputisInvalid: false
    };
  },
  methods:{
    submitData(e){
      e.preventDefault();
      const enteredTitle= this.$refs.titleInput.value;
      const enteredDescription= this.$refs.descInput.value;
      const enteredUrl= this.$refs.linkInput.value;

      if(
      enteredTitle.trim()=== '' || 
      enteredDescription.trim() ==='' || 
      enteredUrl.trim()=== ''
      ){
        this.inputisInvalid= true;
        return;
      } 

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
      
      this.$refs.titleInput.value = '';
      this.$refs.descInput.value = '';
      this.$refs.linkInput.value = '';
    },

    confirmError(){
      this.inputisInvalid = false;
    }
  },
}
</script>

<style scoped>
  label{
    @apply font-bold block mb-2
  }

  input,
  textarea{
    @apply block w-full p-1 border-solid border-2 border-gray-300
  }

  input:focus,
  textarea:focus{
    @apply outline-none bg-gray-100 border-purple-800
  }

  .form-control{
    @apply my-4
  }
</style>