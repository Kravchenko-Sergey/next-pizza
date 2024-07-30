import { cn } from '@/lib/utils'

interface CartItemDetailsImageProps {
  src: string
  className?: string
}

export function CartItemDetailsImage({ src, className }: CartItemDetailsImageProps) {
  return <img className={cn('w-[60px] h-[60px]', className)} src={src} />
}
