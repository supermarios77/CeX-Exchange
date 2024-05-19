import { RefreshCwIcon, MoveHorizontalIcon } from "@/config/icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

const OpenOrders = () => {
  return (
    <div className="flex flex-col gap-4  bg-gray-100/40 p-4 dark:bg-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Open Orders</h2>
        <Button size="icon" variant="ghost">
          <RefreshCwIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Buy</TableCell>
              <TableCell>$50,000.00</TableCell>
              <TableCell>0.5 BTC</TableCell>
              <TableCell>12:34:56</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoveHorizontalIcon className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Cancel</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OpenOrders;
