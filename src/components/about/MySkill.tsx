import React from 'react'

import { Container } from '@/components/layout/Container'
import { SkillList } from '@/components/about/SkillList'
import { Divider } from '@/components/commons/Divider'

import { cn } from '@/libs/utils'

const OTHER_SKILL = [
  'HTML',
  'CSS',
  'Tailwindcss',
  'MUI',
  'Firebase Authentication',
  'Line Chatbot',
  'Dialogflow',
  'NextAuth',
  'Jira',
  'Framer Motion',
]

const LANGUAGE_SKILL = ['TypeScript', 'JavaScript', 'PHP', 'Python']

const FRAMEWORK_AND_LIBS_SKILL = [
  'React',
  'Next.js',
  'Node.js',
  'Nest.js',
  'Express.js',
  'Pandas',
]

const DATABASE_SKILL = [
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Firestore Database',
  'Prisma',
]

const VERSION_CONTROL_SKILL = ['Git', 'GitHub', 'GitLab']

export const MySkill: React.FC = () => {
  return (
    <Container className={cn('h-full px-4 pt-10 flex flex-col items-center')}>
      <h1 className='font-bold text-2xl md:text-4xl'>MY SKILL</h1>

      <div className='mt-16 space-y-5'>
        <SkillList title='Language' data={LANGUAGE_SKILL} />
        <Divider length={12} />
        <SkillList
          title='Framework and Library'
          data={FRAMEWORK_AND_LIBS_SKILL}
        />
        <Divider length={12} reverse />
        <SkillList title='Database' data={DATABASE_SKILL} />
        <Divider length={12} time={300} />
        <SkillList title='Other' data={OTHER_SKILL} />
        <Divider length={12} time={300} reverse />
        <SkillList title='Version Control' data={VERSION_CONTROL_SKILL} />
      </div>
    </Container>
  )
}
