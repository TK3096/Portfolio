import { Introduction } from '@/components/about/Introduction'
import { MySkill } from '@/components/about/MySkill'

const AboutPage = () => {
  return (
    <main>
      <div className='h-screen'>
        <Introduction />
      </div>

      <div className='h-screen'>
        <MySkill />
      </div>
    </main>
  )
}

export default AboutPage
