'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

import { Currency, CurrencyList } from '@/lib/inferface/currency';
import { cn } from '@/lib/utils';

import { Button } from '@/app/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';

type comboboxProps = {
  data: CurrencyList | undefined;
  value: Currency;
  setValue: React.Dispatch<React.SetStateAction<Currency>>;
};
const defaultCurrencyList: CurrencyList = {};
export default function CurrencyListComponent({
  data = defaultCurrencyList,
  value,
  setValue,
}: comboboxProps) {
  const [open, setOpen] = useState(false);
  const getFormattedValue = (currency: Currency | undefined) => {
    if (!currency) return '';
    return `(${currency.symbol}) ${currency.name}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-2/3 justify-between'
        >
          {value.code
            ? getFormattedValue(data ? data[value.code] : undefined) ||
              'Select currency...'
            : 'Select currency...'}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[488px] p-0'>
        <Command>
          <CommandInput placeholder='Search Currency...' className='h-9' />
          <CommandEmpty>No Currency found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {Object.entries(data).map(([code, currency]) => (
                <CommandItem
                  className='text-center'
                  key={code}
                  value={code}
                  onSelect={(currentValue) => {
                    const selectedCurrency = data[currentValue];
                    if (selectedCurrency) {
                      setValue({
                        name: selectedCurrency.name,
                        symbol: selectedCurrency.symbol,
                        code: currentValue,
                      });
                    }
                  }}
                >
                  {getFormattedValue(currency)}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      value.code === code ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
