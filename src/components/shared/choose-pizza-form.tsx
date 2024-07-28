import { cn } from '@/lib/utils'
import { Title } from '@/components/shared/title'
import { Button } from '@/components/ui'
import { PizzaImage } from '@/components/shared/pizza-image'

type ChoosePizzaFormProps = {
  name: string
  imageUrl: string
  ingredients: any[]
  items: any[]
  onClickAdd?: VoidFunction
  className?: string
}

export default function ChoosePizzaForm({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
  className
}: ChoosePizzaFormProps) {
  const textDetails = '30 см, традиционное тесто 30'
  const totalPrice = 550
  const size = 30

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size='md' className='font-extrabold mb-1' />
        <p className='text-gray-400'>{textDetails}</p>
        <Button className='h-[55px] px-10 text-base rounded-xl w-full mt-10'>
          Добавить в корзину за {totalPrice} р
        </Button>
      </div>
    </div>
  )
}
