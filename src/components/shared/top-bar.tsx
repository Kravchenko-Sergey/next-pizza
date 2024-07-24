import { cn } from '@/lib/utils'
import { Categories } from '@/components/shared/categories'
import { SortPopup } from '@/components/shared/sort-popup'
import { Container } from '@/components/shared/container'

type TopBarProps = {
  className?: string
}

export const TopBar = ({ className }: TopBarProps) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
      <Container className='flex items-center justify-between'>
        <Categories className='' />
        <SortPopup className='' />
      </Container>
    </div>
  )
}