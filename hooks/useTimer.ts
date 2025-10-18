import { useState, useEffect, useCallback } from 'react'

export default function useTimer() {
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [initialSeconds, setInitialSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            setIsRunning(false)
            return 0
          }
          return prevSeconds - 1
        })
      }, 1000)
    } else if (totalSeconds === 0 && isRunning) {
      setIsRunning(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, totalSeconds])

  const handleStart = useCallback(() => {
    const newTotalSeconds = minutes * 60 + seconds
    if (newTotalSeconds > 0) {
      setTotalSeconds(newTotalSeconds)
      setInitialSeconds(newTotalSeconds)
      setIsRunning(true)
    }
  }, [minutes, seconds])

  const handlePause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const handleReset = useCallback(() => {
    setIsRunning(false)
    setTotalSeconds(0)
    setInitialSeconds(0)
    setMinutes(0)
    setSeconds(0)
  }, [])

  const handleMinutesChange = useCallback((value: number) => {
    setMinutes(value)
  }, [])

  const handleSecondsChange = useCallback((value: number) => {
    setSeconds(value)
  }, [])

  return {
    totalSeconds,
    initialSeconds,
    isRunning,
    minutes,
    seconds,
    handleStart,
    handlePause,
    handleReset,
    handleMinutesChange,
    handleSecondsChange,
  }
}