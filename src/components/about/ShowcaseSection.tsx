import React from 'react'

import { Container } from '@/components/layout/Container'
import { ShowcaseCard } from './ShowcaseCard'

export const ShowcaseSection: React.FC = () => {
  return (
    <Container className='h-full px-4 pt-10 pb-12 space-y-16'>
      <h1 className='font-bold text-2xl md:text-4xl text-center'>Showcase</h1>

      <div className='grid grid-cols-3 auto-flow-dense auto-rows-[200px_300px] gap-4'>
        <ShowcaseCard
          title='Project 1'
          image='https://via.placeholder.com/1600x900'
          className='col-span-1 row-span-2'
        />
        <ShowcaseCard
          title='Project 2'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 3'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 4'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 5'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 6'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 7'
          image='https://via.placeholder.com/1600x900'
        />
        <ShowcaseCard
          title='Project 8'
          image='https://via.placeholder.com/1600x900'
        />
      </div>
    </Container>
  )
}
