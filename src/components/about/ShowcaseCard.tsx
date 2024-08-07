import React from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/libs/utils'

const variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: (index = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: 'easeInOut',
    },
  }),
}

interface ShowcaseCardProps {
  title: string
  image: string
  index?: number
  onClick?: () => void
  className?: string
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = (
  props: ShowcaseCardProps,
) => {
  const { title, image, className, onClick, index } = props

  return (
    <motion.div
      className={cn('relative group overflow-hidden', className)}
      onClick={onClick}
      initial='hidden'
      animate='visible'
      variants={variants}
      custom={index}
    >
      <div className='w-full h-full overflow-hidden rounded-lg group-hover:opacity-60 transition-opacity duration-300'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover object-center cursor-pointer group-hover:scale-125 transition-transform duration-300'
        />
      </div>
      <p className='hidden md:inline absolute top-0 left-2/4 group-hover:top-2/4 -translate-x-2/4 group-hover:-translate-y-2/4 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold text-lg'>
        {title}
      </p>
      <p className='md:hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-lg'>
        {title}
      </p>
    </motion.div>
  )
}
