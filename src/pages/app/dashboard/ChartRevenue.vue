<template lang="html">
  <Card class="col-span-5">
    <CardHeader class="flex-row items-center justify-between pb-8">
      <div class="space-y-1">
        <CardTitle class="text-base font-medium">
          Receita no período
        </CardTitle>
        <CardDescription>Receita diária no período</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :style="myStyles" /> -->
      <VisXYContainer :data="data" :padding="margin">
        <VisAxis type="y" />

        <VisTooltip :triggers="triggers" />
        <!-- <VisStackedBar :x="a" :y="b" :rounded-corners="5" /> -->
        <VisLine :x="a" :y="b" color="#333333" />
        <VisScatter :x="a" :y="b" color="#111111" />
        <VisAxis type="x" :tick-format="tickFormat" :domain-line="false" />
      </VisXYContainer>
    </CardContent>
  </Card>
</template>


<script lang="ts" setup>
import { Scatter, StackedBar } from '@unovis/ts'
import { VisAxis, VisLine, VisScatter, VisTooltip, VisXYContainer } from '@unovis/vue'
import { ref } from 'vue'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
type DataRecord = { x: number; y: number }
let data = ref([
  { x: 0, y: 700 },
  { x: 1, y: 600 },
  { x: 2, y: 400 },
  { x: 3, y: 1200 },
  { x: 4, y: 700 },
  { x: 5, y: 300 },
  { x: 6, y: 900 },
  { x: 7, y: 200 },
  { x: 8, y: 500 },

])

const margin = { left: 30, right: 30 }

const a = (d: DataRecord) => d.x
const b = (d: DataRecord) => d.y

const triggers = {
  [StackedBar.selectors.bar]: (d: DataRecord) => `Venda: R$ ${d.y}`,

  [Scatter.selectors.point]: (d: DataRecord) => `Venda: R$ ${d.y}`
}

const categories = ['10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12']
const tickFormat = (tick: number) => categories[tick]
</script>
<style lang="">
  
</style>