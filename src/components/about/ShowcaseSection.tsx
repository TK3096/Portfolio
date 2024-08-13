import React from 'react'
import { motion } from 'framer-motion'

import { SeeMoreBtn } from '@/components/about/SeeMoreBtn'
import { Container } from '@/components/layout/Container'
import { ShowcaseCard } from '@/components/about/ShowcaseCard'

import { SHOWCASE } from '@/libs/constants'

export const ShowcaseSection: React.FC = () => {
  return (
    <Container className='flex flex-col items-center justify-center h-full px-4 gap-8'>
      <motion.div className='w-full grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[80px_100px] md:auto-rows-[200px_300px] gap-4'>
        <ShowcaseCard
          index={0}
          title={SHOWCASE[0].title}
          image={SHOWCASE[0].image}
          className='col-span-2'
        />
        <ShowcaseCard
          index={1}
          title={SHOWCASE[1].title}
          image={SHOWCASE[1].image}
        />
        <ShowcaseCard
          index={2}
          title={SHOWCASE[2].title}
          image={SHOWCASE[2].image}
        />
        <ShowcaseCard
          index={3}
          title={SHOWCASE[3].title}
          image={SHOWCASE[3].image}
          className='col-span-2 md:col-span-3'
        />
        <ShowcaseCard
          index={4}
          title={SHOWCASE[4].title}
          image={SHOWCASE[4].image}
          className='col-span-2 md:col-span-1'
        />
      </motion.div>

      <div className='w-full flex justify-center'>
        <SeeMoreBtn onClick={() => {}} />
      </div>
    </Container>
  )
}
