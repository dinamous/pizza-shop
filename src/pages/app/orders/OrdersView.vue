<template lang="">
  <div class=" flex flex-col gap-4">
    <h1 class="text-3xl font-bold tracking-tighter">
      Pedidos
    </h1>
  </div>
  <div class="space-y-2.5">
    <form class="flex items-center gap-2">
      <span class="text-sm font-semibold"> Filtros:</span>
      <Input
        placeholder="Nome do cliente"
        class="h-8 w-[320px]"
      />
    </form>

    <div class="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[64px]" />
            <TableHead class="w-[140px]">
              Identificador
            </TableHead>
            <TableHead class="w-[180px]">
              Realizado há
            </TableHead>
            <TableHead class="w-[140px]">
              Status
            </TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead class="w-[140px]">
              Total do pedido
            </TableHead>
            <TableHead class="w-[164px]" />
            <TableHead class="w-[132px]" />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="(item, index) in Array.from({ length: 9 })"
            :key="index"
          >
            <TableCell>
              <Button
                variant="outline"
                size="sm"
              >
                <Icon
                  icon="lucide:search"
                />
                <span class="sr-only">Detalhes do pedido</span>
              </Button>
            </TableCell>
            <TableCell class="font-mono text-sx font-medium">
              hduAS786asdha9
            </TableCell>
            <TableCell class="text-muted-foreground">
              15 minutos
            </TableCell>
            <TableCell class="">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-slate-400" />
                <span class="font-medium text-muted-foreground">Pendente</span>
              </div>
            </TableCell>
            <TableCell class="font-medium">
              Dinamous
            </TableCell>
            <TableCell class="font-medium">
              R$132,98
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
              >
                <Icon icon="lucide:arrow-right" />
                Aprovar
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
              >
                <Icon icon="lucide:x" />
                Cancelar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>


<script setup>
import { Icon } from '@iconify/vue'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

</script>
<style lang="">
  
</style>