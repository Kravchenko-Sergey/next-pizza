import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Api } from '@/services/api-client'
import { useSet } from 'react-use'

type ReturnProps = {
  ingredients: Ingredient[]
  loading: boolean
  selectedIds: Set<string>
  onAddId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIds, { toggle }] = useSet(new Set<string>([]))

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await Api.ingredient.getAll()
        setIngredients(ingredients)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchIngredients()
  }, [])
  return { ingredients, loading, onAddId: toggle, selectedIds }
}
