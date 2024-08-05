import React from 'react'

import { cn } from '@/libs/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { className, children } = props

  return (
    <div className={cn('max-w-[1200px] mx-auto', className)}>{children}</div>
  )
}
