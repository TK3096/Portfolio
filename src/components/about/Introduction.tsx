import React from 'react'

import { IntroContent } from '@/components/about/IntroContent'

import { CONTAINER_STYLE } from '@/libs/constants'
import { cn } from '@/libs/utils'

export const Introduction: React.FC = () => {
  return (
    <div
      className={cn(
        'h-full px-4 flex flex-col justify-center',
        CONTAINER_STYLE,
      )}
    >
      <IntroContent />
    </div>
  )
}
