<template lang="html">
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="flex items-center gap-2 select-none">
        pizza.shop

        <Icon icon="lucide:chevron-down" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-56">
      <DropdownMenuLabel class="flex flex-col">
        <span>Dinamous</span>
        <span class="text-xs font-normal text-muted-foreground">dinamous@dev.com</span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="flex gap-2 cursor-pointer">
        <Icon icon="lucide:building" class="font-medium " />
        <span>Perfil da loja</span>
      </DropdownMenuItem>
      <router-link to="/sign-in">
        <DropdownMenuItem class="flex gap-2 text-rose-500 dark:text-rose-400 cursor-pointer">
          <Icon icon="lucide:log-out" class="font-medium " />
          <span>

            Sair

          </span>
        </DropdownMenuItem>
      </router-link>
    </DropdownMenuContent>
  </DropdownMenu>
</template>


<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

</script>
<style lang="">
  
</style>