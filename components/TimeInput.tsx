interface TimeInputProps {
  minutes: number
  seconds: number
  onMinutesChange: (value: number) => void
  onSecondsChange: (value: number) => void
  disabled: boolean
}

export default function TimeInput({
  minutes,
  seconds,
  onMinutesChange,
  onSecondsChange,
  disabled,
}: TimeInputProps) {
  const handleMinutesInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    if (value >= 0 && value <= 99) {
      onMinutesChange(value)
    }
  }

  const handleSecondsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    if (value >= 0 && value <= 59) {
      onSecondsChange(value)
    }
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex flex-col items-center">
        <label
          htmlFor="minutes-input"
          className="mb-2 text-sm font-medium text-slate-400"
        >
          Minutes
        </label>
        <input
          id="minutes-input"
          type="number"
          min="0"
          max="99"
          value={minutes}
          onChange={handleMinutesInputChange}
          disabled={disabled}
          className="w-20 rounded-lg bg-slate-700/50 px-3 py-2 text-center text-lg font-mono font-semibold text-white shadow-inner transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="00"
        />
      </div>
      
      <div className="flex flex-col items-center justify-end pb-7">
        <span className="text-2xl font-bold text-slate-400">:</span>
      </div>
      
      <div className="flex flex-col items-center">
        <label
          htmlFor="seconds-input"
          className="mb-2 text-sm font-medium text-slate-400"
        >
          Seconds
        </label>
        <input
          id="seconds-input"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondsInputChange}
          disabled={disabled}
          className="w-20 rounded-lg bg-slate-700/50 px-3 py-2 text-center text-lg font-mono font-semibold text-white shadow-inner transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="00"
        />
      </div>
    </div>
  )
}