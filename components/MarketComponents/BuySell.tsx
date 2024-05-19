import { ReplaceIcon, SettingsIcon } from "@/config/icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const BuySell = () => {
  return (
    <div className="col-span-3 flex flex-col gap-4 border-t bg-gray-100/40 p-4 dark:bg-card">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Buy/Sell</h2>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <ReplaceIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <SettingsIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Limit Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="buy-amount">Amount</Label>
                <Input id="buy-amount" placeholder="0.5 BTC" type="number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="buy-price">Price</Label>
                <Input id="buy-price" placeholder="$50,000.00" type="number" />
              </div>
              <Button type="submit" variant="default">
                Buy
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stop-Limit Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="sell-amount">Amount</Label>
                <Input id="sell-amount" placeholder="0.5 BTC" type="number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sell-stop-price">Stop Price</Label>
                <Input
                  id="sell-stop-price"
                  placeholder="$49,500.00"
                  type="number"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sell-limit-price">Limit Price</Label>
                <Input
                  id="sell-limit-price"
                  placeholder="$49,000.00"
                  type="number"
                />
              </div>
              <Button type="submit" variant="default">
                Sell
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuySell;