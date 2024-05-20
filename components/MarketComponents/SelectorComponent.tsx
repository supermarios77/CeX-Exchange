import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  Select,
} from "../ui/select";
import {
  CommandInput,
  CommandEmpty,
  CommandItem,
  CommandGroup,
  CommandList,
  Command,
} from "../ui/command";
import { BitcoinIcon, RibbonIcon } from "../../config/icons";

export default function Selector() {
  return (
    <div className="flex flex-col items-center justify-between p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-8">
      <div className="flex items-center space-x-3">
        <BitcoinIcon className="h-6 w-6" />
        <Select>
          <SelectTrigger className="text-lg font-semibold">
            <SelectValue placeholder="ETH/USDT" />
          </SelectTrigger>
          <SelectContent>
            <Command>
              <CommandInput
                autoFocus
                className="h-9"
                placeholder="Search assets..."
              />
              <CommandList>
                <CommandEmpty>No assets found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>
                    <BitcoinIcon className="h-4 w-4 mr-2" />
                    ETH/USDT
                  </CommandItem>
                  <CommandItem>
                    <BitcoinIcon className="h-4 w-4 mr-2" />
                    BTC/USDT
                  </CommandItem>
                  <CommandItem>
                    <RibbonIcon className="h-4 w-4 mr-2" />
                    XRP/USDT
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </SelectContent>
        </Select>
        <div className="text-lg font-semibold">$3,114.38</div>
        <div className="text-sm">+1.33%</div>
      </div>
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8">
        <div className="space-x-1 text-center md:text-left">
          <span className="text-sm">24h Change</span>
          <span className="text-sm">$3,146.42</span>
        </div>
        <div className="space-x-1 text-center md:text-left">
          <span className="text-sm">24h Low</span>
          <span className="text-sm">$3,047.55</span>
        </div>
        <div className="space-x-1 text-center md:text-left">
          <span className="text-sm">24h Volume (ETH)</span>
          <span className="text-sm">8.47K</span>
        </div>
        <div className="space-x-1 text-center md:text-left">
          <span className="text-sm">24h Volume (USDT)</span>
          <span className="text-sm">26.14M</span>
        </div>
      </div>
    </div>
  );
}