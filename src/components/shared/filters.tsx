'use client'

import { Title } from '@/components/shared/title'
import { FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/useFilterIngredients'

type FiltersProps = {
  className: string
}

export const Filters = ({ className }: FiltersProps) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()

  const items = ingredients.map(item => ({ value: String(item.id), text: item.name }))

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
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' placeholder='1000' min={0} max={30000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
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
