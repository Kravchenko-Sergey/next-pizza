import { useEffect } from 'react'
import qs from 'qs'
import { useRouter } from 'next/navigation'
import { Filters } from '@/hooks/use-filters'

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter()

  const params = {
    ...filters.price,
    pizzaTypes: Array.from(filters.pizzaTypes),
    sizes: Array.from(filters.sizes),
    ingredients: Array.from(filters.selectedIngredients)
  }

  useEffect(() => {
    const query = qs.stringify(params, { arrayFormat: 'comma' })
    router.push(`?${query}`, { scroll: false })
  }, [filters])
}
