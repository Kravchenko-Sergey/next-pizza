import { useSearchParams } from 'next/navigation'
import { useSet } from 'react-use'
import { useMemo, useState } from 'react'

type PriceProps = {
  priceFrom?: number
  priceTo?: number
}

type QueryFilters = PriceProps & {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export type Filters = {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  price: PriceProps
}

type ReturnProps = Filters & {
  setPrice: (name: keyof PriceProps, value: number) => void
  setPizzaTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(','))
  )

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : [])
  )

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : [])
  )

  const [price, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined
  })

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice(prev => ({ ...prev, [name]: value }))
  }

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      price,
      setPrice: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients
    }),
    [sizes, pizzaTypes, selectedIngredients, price]
  )
}
