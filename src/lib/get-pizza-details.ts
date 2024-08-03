import { getTotalPizzaPrice } from '@/lib/calc-total-pizza-price'
import { Ingredient, Variation } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '@/constants/pizza'

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: Variation[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = getTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`

  return { totalPrice, textDetails }
}
