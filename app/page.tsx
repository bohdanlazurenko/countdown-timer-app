import TimerDisplay from '@/components/TimerDisplay'
import TimerControls from '@/components/TimerControls'
import TimeInput from '@/components/TimeInput'
import useTimer from '@/hooks/useTimer'

export default function Home() {
  const {
    totalSeconds,
    isRunning,
    minutes,
    seconds,
    handleStart,
    handlePause,
    handleReset,
    handleMinutesChange,
    handleSecondsChange,
  } = useTimer()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Countdown Timer
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Set your time and start counting down
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/50 p-8 shadow-2xl backdrop-blur-sm border border-slate-700">
          <TimerDisplay totalSeconds={totalSeconds} />
          
          <div className="mt-8 space-y-4">
            <TimeInput
              minutes={minutes}
              seconds={seconds}
              onMinutesChange={handleMinutesChange}
              onSecondsChange={handleSecondsChange}
              disabled={isRunning}
            />
            
            <TimerControls
              isRunning={isRunning}
              onStart={handleStart}
              onPause={handlePause}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </main>
  )
}