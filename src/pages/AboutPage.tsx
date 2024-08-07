import { IntroductionSection } from '@/components/about/IntroductionSection'
import { MySkillSection } from '@/components/about/MySkillSection'
import { ShowcaseSection } from '@/components/about/ShowcaseSection'

const AboutPage = () => {
  return (
    <main className='h-screen relative snap-mandatory snap-y'>
      <section className='h-screen snap-center'>
        <IntroductionSection />
      </section>

      <section className='min-h-screen snap-center'>
        <MySkillSection />
      </section>

      <section className='min-h-screen snap-center'>
        <ShowcaseSection />
      </section>
    </main>
  )
}

export default AboutPage
