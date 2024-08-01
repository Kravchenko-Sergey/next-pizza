'use client'

import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import CartDrawer from '@/components/shared/cart-drawer'
import { useCartStore } from '@/store/cart'

type CartButtonProps = {
  className?: string
}

export default function CartButton({ className }: CartButtonProps) {
  const items = useCartStore(state => state.items)
  const totalAmount = useCartStore(state => state.totalAmount)
  const loading = useCartStore(state => state.loading)

  return (
    <CartDrawer>
      <Button loading={loading} className={cn('group relative', { 'w-[105px]': loading }, className)}>
        <b>{totalAmount} ₽</b>
        <span className='h-full w-[1px] bg-white/30 mx-3'></span>
        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
          <ShoppingCart className='h-4 w-4 relative' strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
      </Button>
    </CartDrawer>
  )
}
