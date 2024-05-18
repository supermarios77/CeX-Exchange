import React from 'react'
import { Button } from '../ui/button'
import { FilterIcon } from '@/config/icons'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table'

const OrderBook = () => {
  return (
    <div className="flex flex-col gap-4 border-r bg-gray-100/40 p-4 dark:bg-card">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">Order Book</h2>
      <Button size="icon" variant="ghost">
        <FilterIcon className="h-5 w-5" />
      </Button>
    </div>
    <div className="flex-1 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Price</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>$50,100.00</TableCell>
            <TableCell>0.2 BTC</TableCell>
            <TableCell>$10,020.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>$50,050.00</TableCell>
            <TableCell>0.3 BTC</TableCell>
            <TableCell>$15,015.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>$50,000.00</TableCell>
            <TableCell>0.5 BTC</TableCell>
            <TableCell>$25,000.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
  )
}

export default OrderBook