import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface SeeMoreBtnProps {
  onClick: () => void
}

export const SeeMoreBtn: React.FC<SeeMoreBtnProps> = (
  props: SeeMoreBtnProps,
) => {
  const { onClick } = props

  const ref = useRef<HTMLButtonElement>(null)
  const controls = useAnimation()

  const isInView = useInView(ref, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
      })
    } else {
      controls.start({
        scale: 0,
      })
    }
  }, [isInView])

  return (
    <motion.button
      ref={ref}
      className='w-2/5 bg-red-600 hover:bg-red-800 transition-colors duration-200 px-4 py-3 rounded-lg font-bold uppercase'
      initial={{ scale: 0 }}
      animate={controls}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        scale: {
          type: 'spring',
          damping: 5,
        },
      }}
      onClick={onClick}
    >
      See More
    </motion.button>
  )
}
