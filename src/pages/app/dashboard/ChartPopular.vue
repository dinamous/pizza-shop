<template lang="html">
  <Card class="col-span-4">
    <CardHeader class="flex-row items-center justify-between pb-8">
      <div class="space-y-1">
        <CardTitle class="text-base font-medium">
          Pedidos mais populares
        </CardTitle>
        <CardDescription>Relação dos itens mais pedidos dessa semana</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <VisXYContainer :data="data" :padding="margin">
        <VisAxis type="y" />

        <VisTooltip :triggers="triggers" />
        <VisStackedBar :x="a" :y="b" :rounded-corners="5" color="#333333" />


        <VisAxis type="x" :tick-format="tickFormat" :domain-line="false" />
      </VisXYContainer>
    </CardContent>
  </Card>
</template>


<script lang="ts" setup>
import { StackedBar } from '@unovis/ts'
import { VisAxis, VisStackedBar, VisTooltip, VisXYContainer } from '@unovis/vue'
import { ref } from 'vue'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
type DataRecord = { x: number; amount: number }

let data = ref([
  { x: 0, amount: 156 },
  { x: 1, amount: 100 },
  { x: 2, amount: 250 },
  { x: 3, amount: 376 },
  { x: 4, amount: 128 },

])

const margin = { left: 30, right: 30 }

const a = (d: DataRecord) => d.x
const b = (d: DataRecord) => d.amount

const triggers = {
  [StackedBar.selectors.bar]: (d: DataRecord) => `Qtd: ${d.amount}`,
}

const categories = ['Muçarela', 'Marguerita', 'Napolitana', 'Portuguesa', 'Calabresa',]
const tickFormat = (tick: number) => categories[tick]
</script>
<style lang="">
  
</style>