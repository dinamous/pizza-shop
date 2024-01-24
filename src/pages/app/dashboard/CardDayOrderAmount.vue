<template lang="">
  <Card>
    <CardHeader class="flex-row items-center justify-between  space-y-0 pb-2">
      <CardTitle class="text-base font-semibold">
        Pedidos (dia)
      </CardTitle>
      <Icon
        icon="lucide:utensils"
        class="text-muted-foreground text-xl"
      />
    </CardHeader>
    <CardContent class="space-y-1">
      <span class="text-2xl font-bold tracking-tight">
        4
      </span>
      <p class="text-sx text-muted-foreground">
        <span class="text-rose-500">-2%</span> em relação a ontem
      </p>
    </CardContent>
  </Card>
</template>
<script setup>
import { Icon } from '@iconify/vue';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

</script>
<style lang="">
  
</style>