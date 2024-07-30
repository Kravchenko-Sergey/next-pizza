import { cn } from '@/lib/utils'

interface CartItemDetailsPriceProps {
  value: number
  className?: string
}

export function CartItemDetailsPrice({ value, className }: CartItemDetailsPriceProps) {
  return <h2 className={cn('font-bold', className)}>{value} ₽</h2>
}
