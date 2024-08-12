import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import dayjs from 'dayjs'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getDiffWorkYear = () => {
  return dayjs().diff('2021-11-30', 'year')
}

export const convertUrlToBasePath = (url?: string) => {
  const basePapth = import.meta.env.VITE_BASE_PATH

  if (!url) {
    return basePapth
  }

  if (basePapth === '/') {
    return url
  }

  return `${basePapth}${url}`
}
