import { cn } from '@/lib/utils'

interface CardItemInfoProps {
  name: string
  details: string
  className?: string
}

export function CartItemInfo({ name, details, className }: CardItemInfoProps) {
  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
      </div>
      {details && <p className='text-xs text-gray-400 w-[90%]'>{details}</p>}
    </div>
  )
}
