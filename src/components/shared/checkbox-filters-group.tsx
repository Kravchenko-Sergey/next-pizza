'use client'

import { FilterChecboxProps, FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'
import { useState } from 'react'

type Item = FilterChecboxProps

type CheckboxFiltersGroupProps = {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
  className?: string
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue
}: CheckboxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const list = showAll
    ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : items.slice(0, limit)

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
        <div className='mb-5'>
          <Input
            onChange={e => setSearchValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className='bg-gray-50 border-none'
          />
        </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item: Item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={value => console.log(value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать всё'}
          </button>
        </div>
      )}
    </div>
  )
}
