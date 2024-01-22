<script setup lang="ts">

import useValidade from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { reactive, ref } from 'vue'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const isSubmitting = ref(false);

const formData = reactive({
  email: ''
})

const rules = {
  email: { required, email },
}

const v$ = useValidade(rules, formData)

const submitForm = async () => {

  try {
    // Lógica de submissão aqui (por exemplo, chamada de API)
    // const result = await v$.value.$validate()
    console.log(formData.email);

    // Simulação de uma chamada assíncrona
    isSubmitting.value = true;
    // const result = await v$.value.$validate()
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Lógica após a submissão bem-sucedida

  } catch (error) {
    // Lógica em caso de falha na submissão

  } finally {
    isSubmitting.value = false;
  }
}


</script>

<template lang="">
  <div
    class="p-8"
  >
    <div class="w-[350px] flex - flex-col justify-center gap-6 ">
      <div class="flex flex-col gap-2 text-center">
        <h1 class="txt-2xl font-semibold tracking-tight">
          Acessar Painel
        </h1>
        <p class="text-sm text-muted-foreground">
          Acompanhe suas vendas pelo painel do parceiro.
        </p>
      </div>
      <form
        @submit.prevent="submitForm"
        class="space-y-4"
      >
        <div class="space-y-2">
          <Label for="email">Seu email</Label>
          <Input
            id="email"
            type="email"
            v-model="formData.email"
          />
        </div>
        <Button
          class="w-full"
          :disabled="isSubmitting"
        >
          Acessar painel
        </Button>
      </form>
    </div>
  </div>
</template>


<style lang="">
  
</style>