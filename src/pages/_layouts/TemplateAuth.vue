<template lang="html">
  <div class="min-h-screen grid grid-cols-2 antialiased">
    <div class="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
      <div class="flex items-center gap-3 text-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
          <g fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.75.5L8 6l5.5-1.75A3.75 3.75 0 0 0 9.75.5Z" />
            <path d="M7.5.52L7 .5A6.5 6.5 0 1 0 13.5 7v-.5" />
            <circle cx="5.5" cy="9.5" r=".5" />
            <circle cx="4" cy="5" r=".5" />
            <circle cx="10.5" cy="8" r=".5" />
          </g>
        </svg>
        <span class="font-semibold">pizza.shop</span>
      </div>
      <footer class="text-sm">
        Painel do parceiro &copy pizza.shop - {{ new Date().getFullYear() }}
      </footer>
    </div>
    <div class="relative flex flex-col items-center justify-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {

};
</script>
<style lang="">
  
</style>