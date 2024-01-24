<script setup lang="ts">

import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const isSubmitting = ref(false);
const router = useRouter()

const formData = reactive({
  email: ''
})

const rules = {
  email: { required, email },
}

const v$ = useVuelidate(rules, formData)

async function submitForm() {

  try {
    // Lógica de submissão aqui (por exemplo, chamada de API)
    // const result = await v$.value.$validate()
    console.log(formData.email);

    // Simulação de uma chamada assíncrona
    isSubmitting.value = true;
    const result = await v$.value.$validate()

    if (result) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      isSubmitting.value = false;
      toast.success('Enviamos um link de autenticação para o seu e-mail.')
      setTimeout(() => {
        router.push('/')
      }, 2000);
    } else {
      throw new Error
    }

    // Lógica após a submissão bem-sucedida

  } catch (error) {
    // Lógica em caso de falha na submissão
    toast.error('Credenciais inválidas.')
    isSubmitting.value = false;
  } finally {

  }
}


</script>

<template lang="html">
  <div class="p-8">
    <Button as-child variant="ghost" class="absolute right-8 top-8">
      <router-link to="/sign-up">
        Novo Estabelecimento
      </router-link>
    </Button>
    <div class="w-[350px] flex - flex-col justify-center gap-6 ">
      <div class="flex flex-col gap-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">
          Acessar Painel
        </h1>
        <p class="text-sm text-muted-foreground">
          Acompanhe suas vendas pelo painel do parceiro.
        </p>
      </div>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Seu email</Label>
          <Input id="email" type="email" v-model="formData.email" />
        </div>
        <Button class="w-full" :disabled="isSubmitting">
          Acessar painel
        </Button>
      </form>
    </div>
  </div>
</template>


<style lang="">
  
</style>