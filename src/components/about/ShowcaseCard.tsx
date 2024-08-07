import React from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/libs/utils'

interface ShowcaseCardProps {
  title: string
  image: string
  className?: string
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = (
  props: ShowcaseCardProps,
) => {
  const { title, image, className } = props

  return (
    <div className={cn('relative', className)}>
      <div className='w-full h-full overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover object-center cursor-pointer hover:scale-125 transition-transform duration-300'
        />
      </div>
      <p className='opacity-0 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none'>
        {title}
      </p>
    </div>
  )
}
