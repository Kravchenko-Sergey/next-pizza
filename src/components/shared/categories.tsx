'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '../../../store/category'

type CategoriesProps = {
  categories: Category[]
  className?: string
}

export const Categories = ({ categories, className }: CategoriesProps) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 p-1 bg-gray-50 rounded-2xl', className)}>
      {categories.map(({ name, id }) => {
        return (
          <a
            key={id}
            href={`/#${name}`}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button>{name}</button>
          </a>
        )
      })}
    </div>
  )
}
