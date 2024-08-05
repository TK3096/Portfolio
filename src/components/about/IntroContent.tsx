import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

import { ContactMeBtn } from '@/components/about/ContactMeBtn'

const DESCRIPTION =
  "My name is Thanaphon (Tong) Keawjam. I am thai. I've been working in this line of work for 3 years (fulltime work). I try to learn new things to improve my skills and incress my passion to coding."

const titleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
}

const rootWordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const IntroContent: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const controls = useAnimation()

  useEffect(() => {
    let timmer: NodeJS.Timeout

    const show = () => {
      controls.start('visible')

      timmer = setInterval(async () => {
        await controls.start('hidden')
        controls.start('visible')
      }, 10000)
    }

    if (isInView) {
      show()
    }

    return () => {
      clearInterval(timmer)
    }
  }, [isInView])

  return (
    <div className='space-y-4'>
      <h1 className='font-bold text-5xl md:text-7xl'>
        Hi, I&#39;m{' '}
        <motion.span
          initial='hidden'
          animate='visible'
          variants={titleVariants}
        >
          Tong
        </motion.span>
      </h1>

      <h3 className='text-xl md:text-3xl'>
        I&#39;m a <strong className='text-red-600'>full stack developer</strong>
      </h3>

      <div className='py-5'>
        <p className='sr-only'>{DESCRIPTION}</p>
        <motion.p
          ref={ref}
          aria-hidden
          initial='hidden'
          animate={controls}
          variants={rootWordVariants}
          className='text-sm md:text-md'
        >
          {DESCRIPTION.split(' ').map((word, wi) => (
            <span key={`${word}-${wi}`} className='inline-block'>
              <motion.span className='inline-block' variants={wordVariants}>
                {word}
              </motion.span>
              <span className='inline-block'>&nbsp;</span>
            </span>
          ))}
        </motion.p>
      </div>

      <ContactMeBtn onClick={() => {}} />
    </div>
  )
}
