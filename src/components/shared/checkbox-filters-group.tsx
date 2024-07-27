'use client'

import { FilterCheckboxProps, FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input, Skeleton } from '@/components/ui'
import { useState } from 'react'

type Item = FilterCheckboxProps

type CheckboxFiltersGroupProps = {
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  loading?: boolean
  searchInputPlaceholder?: string
  onChange?: (values: string) => void
  defaultValue?: string[]
  selectedValues: Set<string>
  className?: string
  name?: string
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  selectedValues,
  name,
  defaultValue
}: CheckboxFiltersGroupProps) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  if (loading) {
    return (
      <div className={className}>
        <p className='font-bold mb-3'>{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className='h6 h-6 mb-4 rounded-[8px]' />)}
        <Skeleton className='w-28 h-6 mb-4 rounded=[8px]' />
      </div>
    )
  }

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
            checked={selectedValues?.has(item.value)}
            onCheckedChange={() => onChange?.(item.value)}
            name={name}
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
