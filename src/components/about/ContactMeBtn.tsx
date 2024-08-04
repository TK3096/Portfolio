import React from 'react'
import { motion } from 'framer-motion'

interface ContactMeBtnProps {
  onClick: () => void
}

export const ContactMeBtn: React.FC<ContactMeBtnProps> = (
  props: ContactMeBtnProps,
) => {
  const { onClick } = props

  return (
    <motion.button
      className='bg-red-600 hover:bg-red-800 transition-colors duration-200 px-4 py-3 rounded-lg font-bold'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        scale: {
          type: 'spring',
          damping: 5,
        },
      }}
      onClick={onClick}
    >
      Contact Me
    </motion.button>
  )
}
