<template lang="">
  <div class=" flex flex-col gap-4">
    <h1 class="text-3xl font-bold tracking-tighter">
      Pedidos
    </h1>
  </div>
  <div class="space-y-2.5">
    <OrderTableFilters />

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
          <OrderTableRow
            v-for="(item, index) in Array.from({ length: 9 })"
            :key="index"
          />
        </TableBody>
      </Table>
    </div>
    <Pagination
      page-index="0"
      total-count="105"
      per-page="8"
    />
  </div>
</template>


<script setup>

import Pagination from '@/components/PaginationSection.vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import OrderTableFilters from '@/pages/app/orders/OrderTableFilters.vue'
import OrderTableRow from '@/pages/app/orders/OrderTableRow.vue'

</script>
<style lang="">
  
</style>