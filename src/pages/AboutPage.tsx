import { IntroductionSection } from '@/components/about/IntroductionSection'
import { MySkillSection } from '@/components/about/MySkillSection'
import { SkillList } from '@/components/about/SkillList'
import { Divider } from '@/components/commons/Divider'
import { ShowcaseSection } from '@/components/about/ShowcaseSection'
import { TitleSection } from '@/components/about/TitleSection'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import {
  LANGUAGE_SKILL,
  FRAMEWORK_AND_LIBS_SKILL,
  DATABASE_SKILL,
  OTHER_SKILL,
  VERSION_CONTROL_SKILL,
} from '@/libs/constants'

const AboutPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const length = isMobile ? 6 : 12

  return (
    <main className='h-dvh snap-mandatory snap-y overflow-y-scroll'>
      <section className='h-dvh snap-center'>
        <IntroductionSection />
      </section>

      <section className='h-dvh snap-center my-24'>
        <TitleSection title='MY SKILL' />
      </section>

      <section className='h-dvh snap-center my-24'>
        <MySkillSection>
          <SkillList title='Programming Language' data={LANGUAGE_SKILL} />
          <Divider length={length} time={400} />

          <SkillList
            title='Framework and Library'
            data={FRAMEWORK_AND_LIBS_SKILL}
          />
          <Divider length={length} time={400} reverse />
        </MySkillSection>
      </section>

      <section className='h-dvh snap-center my-24'>
        <MySkillSection>
          <SkillList title='Database' data={DATABASE_SKILL} />
          <Divider length={length} time={500} />
          <SkillList title='Version Control' data={VERSION_CONTROL_SKILL} />
          <Divider length={length} time={500} reverse />
          <SkillList title='Other' data={OTHER_SKILL} />
          <Divider length={length} time={500} reverse />
        </MySkillSection>
      </section>

      <section className='h-dvh snap-center my-24'>
        <TitleSection title='SHOWCASE' />
      </section>

      <section className='h-dvh snap-center'>
        <ShowcaseSection />
      </section>
    </main>
  )
}

export default AboutPage
