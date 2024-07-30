import { Ingredient, Variation } from '@prisma/client'
import { PizzaSize, PizzaType } from '@/constants/pizza'

export const getTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  variations: Variation[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = variations.find(item => item.size === size && item.pizzaType === type)?.price || 0
  const totalIngredientsPrice = ingredients
    .filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)

  return pizzaPrice + totalIngredientsPrice
}
