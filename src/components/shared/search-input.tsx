'use client'

import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'
import Link from 'next/link'
import { Api } from '@/services/api-client'

type SearchInputProps = {
  className?: string
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const [focused, setFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState([])
  const ref = useRef(null)

  useClickAway(ref, () => {
    setFocused(false)
  })

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery('')
    setProducts([])
  }

  useDebounce(
    () => {
      Api.product.search(searchQuery).then((data: any) => setProducts(data))
    },
    250,
    [searchQuery]
  )

  return (
    <>
      {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>}
      <div className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)} ref={ref}>
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
          type='text'
          placeholder='Найти пиццу...'
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}
          >
            {products.map((product: any) => {
              return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className='flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer'
                  onClick={onClickItem}
                >
                  <img src={product.imageUrl} alt={product.name} className='rounded-sm h-8 w-8' />
                  <span>{product.name}</span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
