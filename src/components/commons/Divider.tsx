import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/libs/utils'

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
          className={cn(
            'rounded-full bg-neutral-500 w-6 h-1',
            activeIndex === index && 'bg-emerald-500',
          )}
          animate={{
            scale: activeIndex === index ? 1.5 : 1,
          }}
          transition={{ duration }}
        />
      ))}
    </div>
  )
}
