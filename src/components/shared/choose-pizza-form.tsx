import { cn } from '@/lib/utils'
import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'
import { PizzaImage } from '@/components/shared/pizza-image'
import GroupVariants from '@/components/shared/group-variants'
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/constants/pizza'
import { Ingredient, Variation } from '@prisma/client'
import IngredientItem from '@/components/shared/ingredient'
import { getTotalPizzaPrice } from '@/lib/calc-total-pizza-price'
import { usePizzaOptions } from '@/hooks/use-pizza-options'
import { getPizzaDetails } from '@/lib/get-pizza-details'

type ChoosePizzaFormProps = {
  name: string
  imageUrl: string
  ingredients: Ingredient[]
  variations: Variation[]
  onClickAddCart?: VoidFunction
  className?: string
}

export default function ChoosePizzaForm({
  name,
  imageUrl,
  ingredients,
  variations,
  onClickAddCart,
  className
}: ChoosePizzaFormProps) {
  const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } =
    usePizzaOptions(variations)

  const { totalPrice, textDetails } = getPizzaDetails(type, size, variations, ingredients, selectedIngredients)

  const handleClickAdd = () => {
    onClickAddCart?.()
  }

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400'>{textDetails}</p>
        <div className='flex flex-col gap-4 mt-5'>
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={value => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={value => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className=' mt-5 bg-gray-50 p-4 rounded-md h-[420px] overflow-auto scrollbar'>
          <div className='grid grid-cols-3 gap-3'>
            {ingredients.map(ingredient => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button onClick={handleClickAdd} className='h-[55px] px-10 text-base rounded-xl w-full mt-10'>
          Добавить в корзину за {totalPrice} р
        </Button>
      </div>
    </div>
  )
}
