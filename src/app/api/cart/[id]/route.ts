import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/prisma-client'
import { updateCartTotalAmount } from '@/lib/update-cart-total-amount'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id)
    const data = (await req.json()) as { quantity: number }
    const token = req.cookies.get('cartToken')?.value

    if (!token) {
      return NextResponse.json({ error: 'token not found' })
    }

    const cartItem = await prisma.cart.findFirst({ where: { id } })

    if (!cartItem) {
      return NextResponse.json({ error: 'cart item not found' })
    }

    await prisma.cartItem.update({ where: { id }, data: { quantity: data.quantity } })

    const updatedUserCart = await updateCartTotalAmount(token)

    return NextResponse.json(updatedUserCart)
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ message: e.message })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = req.cookies.get('cartToken')?.value

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' })
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id)
      }
    })

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' })
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(params.id)
      }
    })

    const updatedUserCart = await updateCartTotalAmount(token)

    return NextResponse.json(updatedUserCart)
  } catch (error) {
    console.log('[CART_DELETE] Server error', error)
    return NextResponse.json({ message: 'Не удалось удалить корзину' })
  }
}
