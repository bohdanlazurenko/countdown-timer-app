export function formatTime(totalSeconds: number): {
  minutes: number
  seconds: number
} {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return { minutes, seconds }
}