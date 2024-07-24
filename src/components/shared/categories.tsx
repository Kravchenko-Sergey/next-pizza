'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

type CategoriesProps = {
  className: string
}

export const Categories = ({ className }: CategoriesProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты']

  return (
    <div className={cn('inline-flex gap-1 p-1 rounded-2xl', className)}>
      {categories.map((category, index) => {
        return (
          <a
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'flex items-center font-bold h-11 rounded-2xl px-5',
              activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
          >
            <button>{category}</button>
          </a>
        )
      })}
    </div>
  )
}
