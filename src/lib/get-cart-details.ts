import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export type CartStateItem = {
  id: number
  quantity: number
  name: string
  imageUrl: string
  price: number
  disabled?: boolean
  pizzaSize?: number | null
  pizzaType?: number | null
  ingredients: Array<{ name: string; price: number }>
}

interface ReturnProps {
  items: CartStateItem[]
  totalAmount: number
}

export const getCartDetails = (data: any) => {
  const items = data.items.map(item => ({
    id: item.id,
    quantity: item.quantity,
    name: item.variation.product.name,
    imageUrl: item.variation.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    pizzaSize: item.variation.size,
    pizzaType: item.variation.pizzaType,
    disabled: false,
    ingredients: item.ingredients.map(ingredient => ({
      name: ingredient.name,
      price: ingredient.price
    }))
  })) as CartStateItem[]

  return {
    items,
    totalAmount: data.totalAmount
  }
}