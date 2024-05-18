import { MaximizeIcon, MinimizeIcon, LineChart } from '@/config/icons'
import React from 'react'
import { Button } from '../ui/button'

const TradingChart = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">BTC/USD</h2>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <MaximizeIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <MinimizeIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-lg border">
          <LineChart className="h-full w-full" />
        </div>
      </div>
  )
}

export default TradingChart