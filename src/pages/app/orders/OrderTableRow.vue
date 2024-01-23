<template lang="">
  <TableRow>
    <TableCell>
      <Button
        size="xs"
        variant="outline"
      >
        <Icon icon="lucide:search" />
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
        size="xs"
      >
        <Icon icon="lucide:arrow-right" />
        Aprovar
      </Button>
    </TableCell>
    <TableCell>
      <Button
        variant="outline"
        size="xs"
      >
        <Icon icon="lucide:x" />
        Cancelar
      </Button>
    </TableCell>
  </TableRow>
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