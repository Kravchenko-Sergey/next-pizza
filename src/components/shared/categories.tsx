'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useCategoryStore } from '../../../store/category'

type CategoriesProps = {
  className: string
}

export const Categories = ({ className }: CategoriesProps) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)

  const categories = [
    { id: 1, name: 'Пиццы' },
    { id: 2, name: 'Комбо' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' }
  ]

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
