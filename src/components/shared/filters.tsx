'use client'

import { Title } from '@/components/shared/title'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilters, useIngredients, useQueryFilters } from '@/hooks'

type FiltersProps = {
  className?: string
}

export const Filters = ({ className }: FiltersProps) => {
  const { ingredients, loading } = useIngredients()
  const filters = useFilters()

  useQueryFilters(filters)

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))

  const updatePrices = (prices: number[]) => {
    filters.setPrice('priceFrom', prices[0])
    filters.setPrice('priceTo', prices[1])
  }

  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
      <CheckboxFiltersGroup
        title='Тип теста'
        name='pizzaTypes'
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' }
        ]}
        defaultItems={items.slice(0, 6)}
        limit={2}
        className='mb-5'
        loading={loading}
        onChange={filters.setPizzaTypes}
        selectedValues={filters.pizzaTypes}
      />
      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        items={[
          { text: '20 cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' }
        ]}
        defaultItems={items.slice(0, 6)}
        limit={3}
        className='mb-5'
        loading={loading}
        onChange={filters.setSizes}
        selectedValues={filters.sizes}
      />
      {/*<div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>*/}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={100}
            max={1000}
            value={String(filters.price?.priceFrom)}
            onChange={e => filters.setPrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type='number'
            placeholder='1000'
            min={0}
            max={1000}
            value={String(filters.price?.priceTo)}
            onChange={e => filters.setPrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.price.priceFrom || 0, filters.price.priceTo || 1000]}
          onValueChange={updatePrices}
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
        onChange={filters.setSelectedIngredients}
        selectedValues={filters.selectedIngredients}
      />
    </div>
  )
}
