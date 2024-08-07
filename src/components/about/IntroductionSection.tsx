import React from 'react'

import { IntroContent } from '@/components/about/IntroContent'
import { Container } from '@/components/layout/Container'

import { cn } from '@/libs/utils'

export const IntroductionSection: React.FC = () => {
  return (
    <Container className={cn('h-full px-4 flex flex-col justify-center')}>
      <IntroContent />
    </Container>
  )
}
