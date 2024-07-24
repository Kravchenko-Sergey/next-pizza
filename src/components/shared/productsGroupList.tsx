'use client'

import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/shared/product-card'
import { Title } from '@/components/shared/title'
import { useIntersection } from 'react-use'
import { useEffect, useRef } from 'react'
import { useCategoryStore } from '../../../store/category'

type ProductsGroupListProps = {
  title: string
  items: any[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList = ({ title, items, categoryId, className, listClassName }: ProductsGroupListProps) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='mb-5 font-extrabold' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
