import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'

import { Container } from '@/components/layout/Container'
import { ContactCard } from '@/components/contact/ContactCard'

import { CONTACTS } from '@/libs/constants'

import type { ContactType } from '@/types'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export const ContactMeSection: React.FC = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView])

  return (
    <Container className='h-full px-4 flex flex-col justify-center pt-24 pb-24'>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={controls}
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'
      >
        {CONTACTS.map((contact) => (
          <motion.div variants={itemVariants}>
            <Link key={contact.label} to={contact.href}>
              <ContactCard
                Icon={contact.icon}
                label={contact.label}
                type={contact.type as ContactType}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  )
}
