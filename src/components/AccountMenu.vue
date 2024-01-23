<template lang="">
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        class="flex items-center gap-2 select-none"
      >
        pizza.shop

        <Icon icon="lucide:chevron-down" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      class="w-56"
    >
      <DropdownMenuLabel class="flex flex-col">
        <span>Dinamous</span>
        <span class="text-xs font-normal text-muted-foreground">dinamous@dev.com</span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="flex gap-2">
        <Icon
          icon="lucide:building"
          class="font-medium "
        />
        <span>Perfil da loja</span>
      </DropdownMenuItem>
      <DropdownMenuItem class="flex gap-2 text-rose-500 dark:text-rose-400">
        <Icon
          icon="lucide:log-out"
          class="font-medium "
        />
        <span>Sair</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>


<script setup>
import { Icon } from '@iconify/vue';

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