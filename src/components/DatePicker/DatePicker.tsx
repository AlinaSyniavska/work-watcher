'use client'

import React, {FC, useEffect, useState} from 'react';
import { format } from 'date-fns';
import {Calendar as CalendarIcon, ChevronDown} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface IProps {}

const DatePicker: FC<IProps> = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(Date.now()));

  useEffect(() => {
    console.log(date);
  }, [date]);


  const selectDate = (e: any) => {
    setDate(e);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'transparent'}
          className={cn(
            'w-[200px] p-0 justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'do MMMM\',\' yyyy') : <span>Pick a date</span>}
          <ChevronDown className='ml-4 h-4 w-4'/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar className={'day_selected'} mode="single" selected={date} onSelect={(e) => selectDate(e)} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
