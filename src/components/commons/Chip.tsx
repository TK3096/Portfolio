import React from 'react'

import { cn } from '@/libs/utils'

interface ChipProps {
  children: React.ReactNode
  className?: string
}

export const Chip: React.FC<ChipProps> = (props: ChipProps) => {
  const { children, className } = props

  return (
    <div
      className={cn(
        'bg-neutral-800 rounded-full px-3 py-1 cursor-default',
        className,
      )}
    >
      {children}
    </div>
  )
}
