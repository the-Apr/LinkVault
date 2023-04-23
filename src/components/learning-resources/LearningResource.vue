<template>
  <li class="">
    <base-card>
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
  props: ['id', 'title', 'description', 'link'],
  inject:['removeResource']
}
</script>