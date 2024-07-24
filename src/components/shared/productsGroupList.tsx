import { cn } from '@/lib/utils'
import { ProductCard } from '@/components/shared/product-card'
import { Title } from '@/components/shared/title'

type ProductsGroupListProps = {
  title: string
  items: any[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList = ({ title, items, categoryId, className, listClassName }: ProductsGroupListProps) => {
  return (
    <div className={className}>
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
