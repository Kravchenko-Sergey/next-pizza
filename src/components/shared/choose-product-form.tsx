import { cn } from '@/lib/utils'
import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'

type ChooseProductFormProps = {
  name: string
  imageUrl: string
  price: number
  loading?: boolean
  onSubmit?: VoidFunction
  className?: string
}

export default function ChooseProductForm({
  name,
  imageUrl,
  price,
  loading,
  onSubmit,
  className
}: ChooseProductFormProps) {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className='flex items-center justify-center flex-1 relative w-full'>
        <img
          src={imageUrl}
          alt={name}
          className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
        />
      </div>
      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />
        <Button
          onClick={() => onSubmit?.()}
          loading={loading}
          className='h-[55px] px-10 text-base rounded-xl w-full mt-10'
        >
          Добавить в корзину за {price} р
        </Button>
      </div>
    </div>
  )
}
