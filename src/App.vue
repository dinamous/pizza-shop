<template>
  <div id="app">
    <routerView />
  </div>
</template>

<script lang="ts">
import { useHead } from '@unhead/vue';


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
