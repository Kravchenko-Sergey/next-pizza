'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import ChooseProductForm from '@/components/shared/choose-product-form'
import { ProductWithRelations } from '../../../../@types/prisma'
import ChoosePizzaForm from '@/components/shared/choose-pizza-form'
import { useCartStore } from '@/store/cart'
import toast from 'react-hot-toast'
import { useState } from 'react'

type ChooseProductModalProps = {
  product: ProductWithRelations
  className?: string
}

export default function ChooseProductModal({ product, className }: ChooseProductModalProps) {
  const addCartItem = useCartStore(state => state.addCartItem)
  const loading = useCartStore(state => state.loading)
  const router = useRouter()
  const firstItem = product.variations[0]
  const isPizzaForm = product.variations[0].pizzaType

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id

      await addCartItem({ productItemId: itemId, ingredients })

      toast.success(`${product.name} добавлена в корзину`)
      router.back()
    } catch (e) {
      toast.error('Не удалось добавить товар в корзину')
      console.error(e)
    }
  }

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            name={product.name}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            variations={product.variations}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
