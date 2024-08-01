import { getTotalPizzaPrice } from '@/lib/calc-total-pizza-price'
import { Ingredient, ProductItem } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '@/constants/pizza'

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = getTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`

  return { totalPrice, textDetaills }
}