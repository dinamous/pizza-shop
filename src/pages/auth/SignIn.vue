<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template lang="">
  <div class="p-8">
    <div class="w-[350px] flex - flex-col justify-center gap-6 ">
      <div class="flex flex-col gap-2 text-center">
        <h1 class="txt-2xl font-semibold tracking-tight">
          Acessar Painel
        </h1>
        <p class="text-sm text-muted-foreground">
          Acompanhe suas vendas pelo painel do parceiro.
        </p>
      </div>
      <form  class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Seu email</Label>
          <Input
            id="email"
            type="email"
            placeholder="aaaaaaaaa"
          />
        </div>
        <Button class="w-full">
          Acessar painel
        </Button>
      </form>
    </div>
  </div>
</template>


<style lang="">
  
</style>