'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '../../../../@types/prisma'
import { ProductForm } from '@/components/shared/product-form'

type ChooseProductModalProps = {
  product: ProductWithRelations
  className?: string
}

export default function ChooseProductModal({ product, className }: ChooseProductModalProps) {
  const router = useRouter()

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
}
