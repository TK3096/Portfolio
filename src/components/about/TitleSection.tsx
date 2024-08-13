import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { Container } from '@/components/layout/Container'

const variants = {
  hidden: { opacity: 0, y: 400 },
  visible: { opacity: 1, y: 0 },
}

interface TitleSectionProps {
  title: string
}

export const TitleSection: React.FC<TitleSectionProps> = (
  props: TitleSectionProps,
) => {
  const { title } = props

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <Container className='h-full px-4 flex justify-center items-center'>
      <motion.h1
        ref={ref}
        initial='hidden'
        animate={controls}
        transition={{ duration: 0.6 }}
        variants={variants}
        className='font-bold text-6xl md:text-8xl text-center'
      >
        {title}
      </motion.h1>
    </Container>
  )
}
