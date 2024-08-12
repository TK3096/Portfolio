import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { ContactCard } from '@/components/contact/ContactCard'

import { CONTACTS } from '@/libs/constants'

import type { ContactType } from '@/types'

export const ContactMeSection: React.FC = () => {
  return (
    <Container className='h-full px-4 flex flex-col justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        {CONTACTS.map((contact) => (
          <Link key={contact.label} to={contact.href}>
            <ContactCard
              Icon={contact.icon}
              label={contact.label}
              type={contact.type as ContactType}
            />
          </Link>
        ))}
      </div>
    </Container>
  )
}
