import React from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { Container } from '@/components/layout/Container'
import { SkillList } from '@/components/about/SkillList'
import { Divider } from '@/components/commons/Divider'

import { cn } from '@/libs/utils'
import {
  LANGUAGE_SKILL,
  FRAMEWORK_AND_LIBS_SKILL,
  DATABASE_SKILL,
  OTHER_SKILL,
  VERSION_CONTROL_SKILL,
} from '@/libs/constants'

export const MySkillSection: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const length = isMobile ? 6 : 12

  return (
    <Container className={cn('h-full px-4 pt-24 pb-20 space-y-16')}>
      <h1 className='font-bold text-2xl md:text-4xl text-center'>MY SKILL</h1>

      <div className='space-y-5'>
        <SkillList title='Language' data={LANGUAGE_SKILL} />
        <Divider length={length} time={400} />
        <SkillList
          title='Framework and Library'
          data={FRAMEWORK_AND_LIBS_SKILL}
        />
        <Divider length={length} time={400} reverse />
        <SkillList title='Database' data={DATABASE_SKILL} />
        <Divider length={length} time={500} />
        <SkillList title='Other' data={OTHER_SKILL} />
        <Divider length={length} time={500} reverse />
        <SkillList title='Version Control' data={VERSION_CONTROL_SKILL} />
      </div>
    </Container>
  )
}
