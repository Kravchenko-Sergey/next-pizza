import { CartItemProps } from '@/components/shared/cart-item-details/cart-item-details.types'
import { cn } from '@/lib/utils'
import { Trash2Icon } from 'lucide-react'
import CountButton from '@/components/shared/count-button'
import * as CartItem from './cart-item-details'

type CartDrawerItemProps = CartItemProps & {
  onClickCountButton?: (type: 'plus' | 'minus') => void
  onClickRemove?: () => void
  className?: string
}

export default function CartDrawerItem({
  name,
  price,
  imageUrl,
  quantity,
  disabled,
  details,
  onClickCountButton,
  onClickRemove,
  className
}: CartDrawerItemProps) {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        {
          'opacity-50 pointer-events-none': disabled
        },
        className
      )}
    >
      <CartItem.Image src={imageUrl} />

      <div className='flex-1'>
        <CartItem.Info name={name} details={details} />

        <hr className='my-3' />

        <div className='flex items-center justify-between'>
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className='flex items-center gap-3'>
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className='text-gray-400 cursor-pointer hover:text-gray-600'
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
