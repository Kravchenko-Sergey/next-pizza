import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type ContainerProps = {
  className?: string
}

export const Container = ({ className, children }: PropsWithChildren & ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
}
