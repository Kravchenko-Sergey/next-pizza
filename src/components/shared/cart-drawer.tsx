'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet'
import { PropsWithChildren, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import CartDrawerItem from '@/components/shared/cart-drawer-item'
import { getCartItemDetails } from '@/lib/get-card-items-details'
import { PizzaSize, PizzaType } from '@/constants/pizza'
import Image from 'next/image'
import { Title } from '@/components/shared/title'
import { cn } from '@/lib/utils'

type CartDrawerProps = {
  className?: string
}

export default function CartDrawer({ className, children }: PropsWithChildren<CartDrawerProps>) {
  const totalAmount = useCartStore(state => state.totalAmount)
  const fetchCartItems = useCartStore(state => state.fetchCartItems)
  const updateItemQuantity = useCartStore(state => state.updateItemQuantity)
  const removeCartItem = useCartStore(state => state.removeCartItem)
  const items = useCartStore(state => state.items)

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  const onClickRemove = (id: number) => {
    removeCartItem(id)
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
        <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                В корзине <span className='font-bold'>{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>
          )}
          {!totalAmount && (
            <div className='flex flex-col items-center justify-center w-72 mx-auto'>
              <Image src='/assets/images/empty-box.png' alt='Empty cart' width={120} height={120} />
              <Title text='Корзина пустая' size='sm' className='text-center font-bold my-2'></Title>
              <p className='text-center text-neutral-500 mb-5'>Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>
              <SheetClose>
                <Button className='w-56 h-12 text-base' size='lg'>
                  <ArrowLeft className='w-5 mr-2' />
                  Вернуться назад
                </Button>
              </SheetClose>
            </div>
          )}
          {totalAmount > 0 && (
            <>
              <div className='-mx-6 mt-5 overflow-auto flex-1'>
                {items.map(item => (
                  <div key={item.id} className='mb-2'>
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={
                        item.pizzaSize && item.pizzaSize
                          ? getCartItemDetails(
                              item.ingredients,
                              item.pizzaType as PizzaType,
                              item.pizzaSize as PizzaSize
                            )
                          : ''
                      }
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
                      onClickRemove={() => onClickRemove(item.id)}
                      disabled={item.disabled}
                    />
                  </div>
                ))}
              </div>
              <SheetFooter className='-mx-6 bg-white p-8'>
                <div className='w-full'>
                  <div className='flex mb-4'>
                    <span className='flex flex-1 text-lg text-neutral-500'>
                      Итого
                      <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
                    </span>

                    <span className='font-bold text-lg'>{totalAmount} ₽</span>
                  </div>

                  <Link href='/cart'>
                    <Button type='submit' className='w-full h-12 text-base'>
                      Оформить заказ
                      <ArrowRight className='w-5 ml-2' />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}