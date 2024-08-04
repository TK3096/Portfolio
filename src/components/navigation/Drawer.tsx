import React, { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { motion, useAnimation } from 'framer-motion'

import { Menu } from '@/components/navigation//Menu'

import { cn } from '@/libs/utils'

const drawerVariants = {
  active: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 20,
    },
  },
  inactive: {
    x: '-100%',
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 20,
    },
  },
}

const toggleVariants = {
  active: {
    rotate: 180,
  },
  inactive: {
    rotate: 0,
  },
}

interface DrawerProps {
  pathname?: string
}

export const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const { pathname } = props

  const [toggle, setToggle] = useState(false)
  const controls = useAnimation()

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  useEffect(() => {
    controls.start(toggle ? 'active' : 'inactive')
  }, [toggle, controls])

  return (
    <div>
      <button className='focus:outline-none' onClick={handleToggle}>
        <div className='w-5 h-5 relative'>
          {toggle && (
            <motion.div
              className='absolute inset-0'
              variants={toggleVariants}
              initial='inactive'
              animate='active'
            >
              <FaXmark className='w-5 h-5' />
            </motion.div>
          )}
          {!toggle && (
            <motion.div
              className='absolute inset-0'
              variants={toggleVariants}
              initial='inactive'
              animate='active'
            >
              <FaBars className='w-5 h-5' />
            </motion.div>
          )}
        </div>
      </button>

      <motion.div
        className={cn('fixed inset-0 z-50 bg-neutral-900 w-3/4 h-full')}
        variants={drawerVariants}
        initial='inactive'
        animate={controls}
      >
        <div className='mt-20 px-10'>
          <Menu axis='vertical' pathname={pathname} />
        </div>
      </motion.div>
    </div>
  )
}
