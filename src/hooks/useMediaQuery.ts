import { useEffect, useState } from 'react'

export const useMediaQuery = (breakpoint: string) => {
  const [isMatches, setIsMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint)

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMatches(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [breakpoint])

  return isMatches
}
