import React from 'react'
import { Link } from 'react-router-dom'

import { convertUrlToBasePath } from '@/libs/utils'

export const Logo: React.FC = () => {
  return (
    <Link to={convertUrlToBasePath()}>
      <h1 className='font-bold text-2xl cursor-default'>TonG+</h1>
    </Link>
  )
}
