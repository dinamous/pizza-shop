<template lang="html">
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Pedido: js83hfbv93</DialogTitle>
      <DialogDescription>
        Detalhes do pedido
      </DialogDescription>
    </DialogHeader>

    <div class="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell class="text-muted-foreground">
              Status
            </TableCell>
            <TableCell class="flex justify-end">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-slate-400" />
                <span class="font-medium text-muted-foreground">Pendente</span>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-muted-foreground">
              Cliente
            </TableCell>
            <TableCell class="flex justify-end">
              Dinamous
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-muted-foreground">
              Telefone
            </TableCell>
            <TableCell class="flex justify-end">
              (11) 9-9834-2138
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-muted-foreground">
              Email
            </TableCell>
            <TableCell class="flex justify-end">
              dinamous@dev.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell class="flex justify-end">
              3 minutos
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="text-right">
              Produto
            </TableHead>
            <TableHead class="text-right">
              Qtd.
            </TableHead>
            <TableHead class="text-right">
              Preço
            </TableHead>
            <TableHead class="text-right">
              Subtotal
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="text-right">
              Pizza Marguerita (G)
            </TableCell>
            <TableCell class="text-right">
              2
            </TableCell>
            <TableCell class="text-right">
              R$ 64,99
            </TableCell>
            <TableCell class="text-right">
              R$ 129,99
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="text-right">
              Coca-cola (2L)
            </TableCell>
            <TableCell class="text-right">
              1
            </TableCell>
            <TableCell class="text-right">
              R$ 12,00
            </TableCell>
            <TableCell class="text-right">
              R$ 12,00
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell col-span="3">
              Total do pedido
            </TableCell>
            <TableCell />
            <TableCell />
            <TableCell class="text-right">
              R$ 141,99
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </DialogContent>
</template>

<script setup>
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>
<style lang="">
  
</style>