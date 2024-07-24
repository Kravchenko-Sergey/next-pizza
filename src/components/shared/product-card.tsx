import Link from 'next/link'
import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'
import { Plus } from 'lucide-react'

type ProductCardProps = {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export const ProductCard = ({ id, name, price, imageUrl, className }: ProductCardProps) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center items-center px-6 bg-secondary rounded-lg h-[260px]'>
          <img src={imageUrl} alt={name} className='w-[215px] h-[215px]' />
        </div>
        <Title text={name} size='sm' className='mb-1 my-3 font-bold' />
        <p className='text-sm text-gray-400'>
          Цыплёнок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            от <b>{price} p</b>
          </span>
          <Button variant='secondary' className='text-base font-bold'>
            <Plus className='w-5 h-5 mr-1' /> Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}