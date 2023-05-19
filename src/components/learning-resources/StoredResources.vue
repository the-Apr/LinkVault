<template>
  <div v-if="resources.length > 0" class="lg:col-span-3 col-span-4">
    <ul>
      <learning-resource v-for= 'res in resources' 
        :key= "res.id"
        :id= "res.id"
        :title= 'res.title'
        :description= 'res.description'
        :link= 'res.link'
        >
      </learning-resource>
    </ul>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default {
  components: {
    LearningResource,
  },

  inject: ['getResources'], 
  
  computed: {
    resources() {
      return this.getResources();
    }, 
  },
}

</script>