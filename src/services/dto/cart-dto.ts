import { Cart, CartItem, Ingredient, Product, Variation } from '@prisma/client'

export type CartItemDTO = CartItem & {
  variation: Variation & {
    product: Product
  }
  ingredients: Ingredient[]
}

export interface CartDTO extends Cart {
  items: CartItemDTO[]
}

export interface CreateCartItemValues {
  productItemId: number
  ingredients?: number[]
}
