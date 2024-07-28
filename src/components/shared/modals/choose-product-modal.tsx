'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import ChooseProductForm from '@/components/shared/choose-product-form'
import { ProductWithRelations } from '../../../../@types/prisma'
import ChoosePizzaForm from '@/components/shared/choose-pizza-form'

type ChooseProductModalProps = {
  product: ProductWithRelations
  className?: string
}

export default function ChooseProductModal({ product, className }: ChooseProductModalProps) {
  const router = useRouter()
  const isPizzaForm = product.variations[0].pizzaType
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        {isPizzaForm ? (
          <ChoosePizzaForm name={product.name} imageUrl={product.imageUrl} ingredients={[]} items={[]} />
        ) : (
          <ChooseProductForm name={product.name} imageUrl={product.imageUrl} items={[]} />
        )}
      </DialogContent>
    </Dialog>
  )
}
