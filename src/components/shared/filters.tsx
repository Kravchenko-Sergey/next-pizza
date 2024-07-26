'use client'

import { Title } from '@/components/shared/title'
import { FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { useState } from 'react'

type FiltersProps = {
  className?: string
}

type PriceProps = {
  priceFrom: number
  priceTo: number
}

export const Filters = ({ className }: FiltersProps) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
  const [price, setPrice] = useState<PriceProps>({ priceFrom: 0, priceTo: 1000 })

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({ ...price, [name]: value })
  }

  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            value={price.priceFrom}
            onChange={e => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='1000'
            min={0}
            max={30000}
            value={price.priceTo}
            onChange={e => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckboxFiltersGroup
        title='Ингридиенты'
        name='ingredients'
        items={items}
        defaultItems={items.slice(0, 6)}
        limit={6}
        className='mt-5'
        loading={loading}
        onChange={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}
