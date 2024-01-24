<template lang="html">
  <div class="flex items-center justify-between">
    <span class="text-sm text-muted-foreground">
      Total de {{ totalCount }} item(s)
    </span>
    <div class="flex items-center gap-6 lg:gap-8">
      <div class="text-sm font-medium">
        Página {{ pageIndex + 1 }} de {{ totalPages }}
      </div>
      <div class="flex item-center gap-2">
        <Button variant="outline" class="h-8 w-8 p-0">
          <Icon icon="lucide:chevrons-left" />
          <span class="sr-only">Primeira página</span>
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0">
          <Icon icon="lucide:chevron-left" />
          <span class="sr-only">Página Anterior</span>
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0">
          <Icon icon="lucide:chevron-right" />
          <span class="sr-only">Próxima página</span>
        </Button>
        <Button variant="outline" class="h-8 w-8 p-0">
          <Icon icon="lucide:chevrons-right" />
          <span class="sr-only">Última página</span>
        </Button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import { Icon } from '@iconify/vue';
import { ref } from 'vue';

import {
  Button,
} from '@/components/ui/button'

export default {
  props: {
    pageIndex: {
      type: Number,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
  },
  components: {
    Icon,
    Button
  },
  setup(props) {
    const totalPages = ref(0)
    const CalculaPages = () => {
      totalPages.value = Math.ceil(props.totalCount / props.perPage) || 1
    };
    CalculaPages()

    return {
      totalPages, Icon
    }
  }
}


</script>
<style lang="">
  
</style>