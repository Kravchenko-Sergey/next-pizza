import { Title } from '@/components/shared/title'
import { FilterCheckbox } from '@/components/shared/filter-checkbox'
import { Input } from '@/components/ui'
import { RangeSlider } from '@/components/shared/range-slider'
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group'

type FiltersProps = {
  className: string
}

export const Filters = ({ className }: FiltersProps) => {
  const items = [
    { text: 'Сырный соус', value: '1' },
    { text: 'Моцарелла', value: '2' },
    { text: 'Чеснок', value: '3' },
    { text: 'Солёные огурчики', value: '4' },
    { text: 'Красный лук', value: '5' },
    { text: 'Томаты', value: '6' },
    { text: 'Сырный соус', value: '1' },
    { text: 'Моцарелла', value: '2' },
    { text: 'Чеснок', value: '3' },
    { text: 'Солёные огурчики', value: '4' },
    { text: 'Красный лук', value: '5' },
    { text: 'Томаты', value: '6' }
  ]

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
      <CheckboxFiltersGroup title='Ингридиенты' items={items} defaultItems={items} limit={6} className='mt-5' />
    </div>
  )
}
