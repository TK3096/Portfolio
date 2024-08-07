import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Container } from '@/components/layout/Container'
import { ShowcaseCard } from '@/components/about/ShowcaseCard'

import { SHOWCASE } from '@/libs/constants'

export const ShowcaseSection: React.FC = () => {
  const navigate = useNavigate()

  const randomGridSpan = useMemo(() => {
    return SHOWCASE.map(() => {
      const rand = Math.random()

      if (rand > 0.8) {
        return 'col-span-2'
      } else if (rand > 0.6) {
        return 'row-span-2'
      } else {
        return ''
      }
    })
  }, [])

  const handleShowcaseClick = (href: string) => {
    navigate(href)
  }

  return (
    <Container className='h-full px-4 pt-24 pb-20 space-y-16'>
      <h1 className='font-bold text-2xl md:text-4xl text-center'>SHOWCASE</h1>

      <motion.div className='grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[200px_300px] gap-4'>
        {SHOWCASE.map((showcase, index) => (
          <ShowcaseCard
            key={showcase.title}
            index={index}
            title={showcase.title}
            image={showcase.image}
            className={randomGridSpan[index]}
            onClick={() => handleShowcaseClick(showcase.href)}
          />
        ))}
      </motion.div>
    </Container>
  )
}
