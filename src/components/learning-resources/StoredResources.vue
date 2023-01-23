<template>
  <ul>
    <learning-resource v-for= 'res in resources' 
      :key= "res.id"
      :id= "res.id"
      :title= 'res.title'
      :description= 'res.description'
      :link= 'res.link'>
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default {
  components: {
    LearningResource,
  },
  inject: ['resources'], 
}
</script>