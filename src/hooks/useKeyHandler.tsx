import { useState, useEffect } from 'react'

const useKeyHandler = (keyCode: string) => {
  const [keyPressed, setKeyPress] = useState(false)

  const onKeyDown = ({ code }: KeyboardEvent) => {
    if (keyCode === code) {
      setKeyPress(true)
    }
  }

  const onKeyUp = ({ code }: KeyboardEvent) => {
    if (keyCode === code) {
      setKeyPress(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return keyPressed
}

export default useKeyHandler
