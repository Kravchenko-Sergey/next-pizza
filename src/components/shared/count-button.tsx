import CountIconButton from '@/components/shared/count-icon-button'
import { cn } from '@/lib/utils'

export type CountButtonProps = {
  value?: number
  size?: 'sm' | 'lg'
  onClick?: (type: 'plus' | 'minus') => void
  className?: string
}

export default function CountButton({ className, onClick, value = 1, size = 'sm' }: CountButtonProps) {
  return (
    <div className={cn('inline-flex items-center justify-between gap-3', className)}>
      <CountIconButton onClick={() => onClick?.('minus')} disabled={value === 1} size={size} type='minus' />
      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>
      <CountIconButton onClick={() => onClick?.('plus')} size={size} type='plus' />
    </div>
  )
}
