<template lang="html">
  <div class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold tracking-tighter">
      Dashaboard
    </h1>
    <div class="grid grid-cols-4 gap-4">
      <CardMonthRevenue />
      <CardMonthOrderAmount />
      <CardDayOrderAmount />
      <CardMonthOrderCanceledAmount />
    </div>

    <div class="grid grid-cols-9 gap-6">
      <ChartRevenue />
    </div>
  </div>
</template>


<script setup lang="ts">
import CardDayOrderAmount from './CardDayOrderAmount.vue';
import CardMonthOrderAmount from './CardMonthOrderAmount.vue'
import CardMonthOrderCanceledAmount from './CardMonthOrderCanceledAmount.vue'
import CardMonthRevenue from './CardMonthRevenue.vue';
import ChartRevenue from './ChartRevenue.vue';

</script>
<style lang="">
  
</style>