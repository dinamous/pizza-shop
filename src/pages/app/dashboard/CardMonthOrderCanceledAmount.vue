<template lang="">
  <Card>
    <CardHeader class="flex-row items-center justify-between  space-y-0 pb-2">
      <CardTitle class="text-base font-semibold">
        Cancelamentos (mês)
      </CardTitle>
      <Icon
        icon="lucide:clipboard-x"
        class="text-muted-foreground text-xl"
      />
    </CardHeader>
    <CardContent class="space-y-1">
      <span class="text-2xl font-bold tracking-tight">
        32
      </span>
      <p class="text-sx text-muted-foreground">
        <span class="text-emerald-500">-6%</span> em relação ao mês passado
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