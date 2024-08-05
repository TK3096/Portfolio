import { Introduction } from '@/components/about/Introduction'
import { MySkills } from '@/components/about/MySkills'

const AboutPage = () => {
  return (
    <main>
      <div className='h-screen'>
        <Introduction />
      </div>

      <div className='h-screen'>
        <MySkills />
      </div>
    </main>
  )
}

export default AboutPage
