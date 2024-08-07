import { IntroductionSection } from '@/components/about/IntroductionSection'
import { MySkillSection } from '@/components/about/MySkillSection'
import { ShowcaseSection } from '@/components/about/ShowcaseSection'

const AboutPage = () => {
  return (
    <main>
      <div className='h-screen'>
        <IntroductionSection />
      </div>
      <MySkillSection />
      <ShowcaseSection />
    </main>
  )
}

export default AboutPage
