import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface DividerProps {
  length?: number
  time?: number
  reverse?: boolean
}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const { length = 6, time = 200, reverse } = props

  const [activeIndex, setActiveIndex] = useState(reverse ? length - 1 : 0)

  const duration = useMemo(() => time / 1000, [time])

  useEffect(() => {
    const interval = setInterval(() => {
      if (reverse) {
        setActiveIndex((prevIndex) => (prevIndex - 1 + length) % length)
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % length)
      }
    }, time)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='w-full h-3 flex gap-3 justify-center items-end'>
      {Array.from({ length }).map((_, index) => (
        <motion.div
          key={index}
          className='rounded-full bg-neutral-500'
          animate={{
            height: activeIndex === index ? '0.5rem' : '0.15rem',
          }}
          transition={{ duration }}
          style={{ width: '1.75rem', height: '0.25rem' }}
        />
      ))}
    </div>
  )
}
