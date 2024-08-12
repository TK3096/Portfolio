import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { cn } from '@/libs/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const MENU = [
  {
    name: 'About',
    href: '/',
  },
  // {
  //   name: 'Project',
  //   href: '/project',
  // },
  {
    name: 'Contact',
    href: '/contact',
  },
]

interface MenuProps {
  axis?: 'horizontal' | 'vertical'
  pathname?: string
}

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  const { axis = 'horizontal', pathname } = props

  let style = ''

  if (axis === 'horizontal') {
    style = 'flex-row space-x-5'
  } else {
    style = 'flex-col space-y-5'
  }

  return (
    <motion.ul
      className={cn('flex', style)}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {MENU.map((menu) => (
        <motion.li key={menu.name} variants={itemVariants}>
          <Link
            to={menu.href}
            className={cn(
              'text-lg font-semibold hover:text-red-500 transition-colors',
              pathname === menu.href ? 'text-red-500' : 'text-white',
            )}
          >
            {menu.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
