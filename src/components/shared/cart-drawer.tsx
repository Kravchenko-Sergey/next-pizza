'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet'
import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'
import { getCartItemDetails } from '@/lib/get-card-items-details'
import CartDrawerItem from '@/components/shared/cart-drawer-item'

type CartDrawerProps = {
  className?: string
}

export default function CartDrawer({ className, children }: PropsWithChildren<CartDrawerProps>) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
        <SheetHeader>
          <SheetTitle>
            В корзине <span className='font-bold'>3 товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className='-mx-6 mt-5 overflow-auto scrollbar flex-1'>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
          <div className='mb-2'>
            <CartDrawerItem
              id={1}
              imageUrl={'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif'}
              details={getCartItemDetails(
                [{ name: 'Ветчина' }, { name: 'моцарелла' }, { name: 'фирменный соус альфредо' }],
                2,
                30
              )}
              name={'Чоризо фреш'}
              price={419}
              quantity={0}
            />
          </div>
        </div>
        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>

              <span className='font-bold text-lg'>500 ₽</span>
            </div>

            <Link href='/cart'>
              <Button type='submit' className='w-full h-12 text-base'>
                Оформить заказ
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
