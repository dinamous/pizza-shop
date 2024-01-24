<template lang="html">
  <div class="flex h-screen flex-col items-center justify-center gap-2">
    <h1 class="text-4xl font-bold">
      Página não encontrada
    </h1>
    <p class="text-accent-foreground">
      Voltar para o <router-link to="/" class="text-sky-600">
        Dashboard
      </router-link>
    </p>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink }
}
</script>
<style lang="">
  
</style>