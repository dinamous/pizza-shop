<template lang="">
  <form class="flex items-center gap-2">
    <span class="text-sm font-semibold"> Filtros:</span>
    <Input
      placeholder="ID do pedido"
      class="h-8 w-auto"
    />
    <Input
      placeholder="Nome do cliente"
      class="h-8 w-[320px]"
    />
    <Select default-value="all">
      <SelectTrigger class="h-8 w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          Todos status
        </SelectItem>
        <SelectItem value="pending">
          Pendente
        </SelectItem>
        <SelectItem value="canceled">
          Cancelado
        </SelectItem>
        <SelectItem value="processing">
          Em prepara
        </SelectItem>
        <SelectItem value="delivering">
          Em entrega
        </SelectItem>
        <SelectItem value="delivered">
          Entregue
        </SelectItem>
      </SelectContent>
    </Select>

    <Button
      type="submit"
      variant="secondary"
      size="xs"
    >
      <Icon
        icon="lucide:search"
        class="mr-2"
      />
      Filtrar resultados
    </Button>

    <Button
      type="button"
      variant="outline"
      size="xs"
    >
      <Icon
        icon="lucide:x"
        class="mr-2"
      />
      Remover Filtros
    </Button>
  </form>
</template>


<script setup>
import { Icon } from '@iconify/vue'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>
<style lang="">
  
</style>