import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [y, setY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setY(
        window.scrollY ||
          document.documentElement.scrollTop ||
          document.body.scrollTop,
      )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { y }
}
