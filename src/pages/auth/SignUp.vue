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
  email: '',
  restaurantName: '',
  phone: '',
  managerName: ''

})

const rules = {
  email: { required, email },
  restaurantName: { required },
  phone: { required },
  managerName: { required }
}

const v$ = useVuelidate(rules, formData)


async function submitForm() {

  try {
    // Lógica de submissão aqui (por exemplo, chamada de API)
    // const result = await v$.value.$validate()
    console.log(formData);

    // Simulação de uma chamada assíncrona
    isSubmitting.value = true;
    // const result = await v$.value.$validate()
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Lógica após a submissão bem-sucedida

  } catch (error) {
    // Lógica em caso de falha na submissão
    toast.error('Erro ao cadastrar.')
  } finally {
    isSubmitting.value = false;
    toast.success('Restaurante cadastrado com sucesso.')
    router.push('/sign-in')
  }
}


</script>

<template lang="">
  <div
    class="p-8"
  >
    <Button
      as-child
      variant="ghost"
      class="absolute right-8 top-8"
    >
      <router-link
        to="/sign-in"
      >
        Fazer Login
      </router-link>
    </Button>
    <div class="w-[350px] flex - flex-col justify-center gap-6 ">
      <div class="flex flex-col gap-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">
          Criar conta grátis
        </h1>
        <p class="text-sm text-muted-foreground">
          Seja um parceiro e comece suas vendas.
        </p>
      </div>
      <form
        @submit.prevent="submitForm"
        class="space-y-4"
      >
        <div class="space-y-2">
          <Label for="restaurantName">Nome do estabelecimento</Label>
          <Input
            id="restaurantName"
            type="text"
            v-model="formData.restaurantName"
          />
        </div>

        <div class="space-y-2">
          <Label for="managerName">Seu nome</Label>
          <Input
            id="managerName"
            type="text"
            v-model="formData.managerName"
          />
        </div>

        <div class="space-y-2">
          <Label for="email">Seu email</Label>
          <Input
            id="email"
            type="email"
            v-model="formData.email"
          />
        </div>

        <div class="space-y-2">
          <Label for="phone">Seu celular</Label>
          <Input
            id="phone"
            type="tel"
            v-model="formData.phone"
          />
        </div>

        <Button
          class="w-full"
          :disabled="isSubmitting"
        >
          Acessar painel
        </Button>

        <p class="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, cocê concorda com nossos <a
            href=""
            class="underline underline-offset-1"
          >Termos de serviço</a> e <a
            href=""
            class="underline underline-offset-1"
          >Políticas de Privacidade.</a>
        </p>
      </form>
    </div>
  </div>
</template>


<style lang="">
  
</style>