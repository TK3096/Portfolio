import React from 'react'

import { Container } from '@/components/layout/Container'

interface MySkillSectionProps {
  children: React.ReactNode
}

export const MySkillSection: React.FC<MySkillSectionProps> = (
  props: MySkillSectionProps,
) => {
  const { children } = props

  return (
    <Container className='h-full px-4 flex flex-col justify-center gap-6 md:gap-16'>
      {children}
    </Container>
  )
}
