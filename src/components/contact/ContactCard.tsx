import React from 'react'
import { motion } from 'framer-motion'
import { type IconType } from 'react-icons/lib'

import { cn } from '@/libs/utils'

import type { ContactType } from '@/types'

interface ContactCardProps {
  label: string
  Icon: IconType
  type: ContactType
}

export const ContactCard: React.FC<ContactCardProps> = (
  props: ContactCardProps,
) => {
  const { label, Icon, type } = props

  let hoverBorderColor = ''
  let hoverTextColor = ''

  switch (type) {
    case 'email':
      hoverBorderColor = 'hover:border-red-600'
      hoverTextColor = 'group-hover:text-red-600'
      break
    case 'facebook':
      hoverBorderColor = 'hover:border-blue-600'
      hoverTextColor = 'group-hover:text-blue-600'
      break
    case 'github':
      hoverBorderColor = 'hover:border-emerald-500'
      hoverTextColor = 'group-hover:text-emerald-500'
      break
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { ease: 'easeInOut' },
      }}
      className={cn(
        'group flex flex-col gap-8 items-center p-4 rounded-lg border-neutral-600 border-2 w-full cursor-pointer bg-black',
        hoverBorderColor,
      )}
    >
      <Icon
        className={cn(
          'h-20 w-20 transition-colors duration-300',
          hoverTextColor,
        )}
      />
      <p
        className={cn(
          'transition-colors duration-300 font-semibold text-lg',
          hoverTextColor,
        )}
      >
        {label}
      </p>
    </motion.div>
  )
}
