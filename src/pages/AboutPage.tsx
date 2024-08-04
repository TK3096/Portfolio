import { Introduction } from '@/components/about/Introduction'
import { Container } from '@/components/layout/Container'

const AboutPage = () => {
  return (
    <main>
      <Container className='h-screen'>
        <Introduction />
      </Container>

      <Container className='h-screen'>
        <div>next section</div>
      </Container>
    </main>
  )
}

export default AboutPage
