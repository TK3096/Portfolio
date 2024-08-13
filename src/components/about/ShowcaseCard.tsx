import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { cn, convertUrlToBasePath } from '@/libs/utils'

const variants = {
  hidden: { opacity: 0, scale: 0.2 },
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

  const ref = useRef<HTMLDivElement>(null)
  const isInViwe = useInView(ref, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInViwe) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInViwe])

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative group overflow-hidden border-2 border-neutral-700 rounded-lg',
        className,
      )}
      onClick={onClick}
      initial='hidden'
      animate={controls}
      variants={variants}
      custom={index}
    >
      <div className='w-full h-full overflow-hidden rounded-lg group-hover:opacity-60 transition-opacity duration-300'>
        <img
          src={convertUrlToBasePath(image)}
          alt={title}
          className='w-full h-full object-center cursor-pointer group-hover:scale-125 transition-transform duration-300'
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
