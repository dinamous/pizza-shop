<template>
  <div id="app">
    <Toaster rich-colors />
    <routerView />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { toast, Toaster } from 'vue-sonner'

useHead({
  titleTemplate: '%s | pizza.shop',
  meta: [
    {
      name: 'description',
      content: 'a pizza shop'
    }
  ]
});


</script>

<style scoped></style>
