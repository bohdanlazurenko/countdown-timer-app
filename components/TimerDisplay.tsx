import { formatTime } from '@/lib/utils'

interface TimerDisplayProps {
  totalSeconds: number
}

export default function TimerDisplay({ totalSeconds }: TimerDisplayProps) {
  const { minutes, seconds } = formatTime(totalSeconds)

  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center space-x-2 rounded-xl bg-slate-900/50 px-8 py-6 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <span className="text-6xl font-mono font-bold text-white tabular-nums">
            {String(minutes).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
            Minutes
          </span>
        </div>
        <span className="text-5xl font-mono font-bold text-slate-500">:</span>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-mono font-bold text-white tabular-nums">
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
            Seconds
          </span>
        </div>
      </div>
    </div>
  )
}