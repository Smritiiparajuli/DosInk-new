import { format, getMonth, getYear, setMonth } from 'date-fns';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '../../lib/utils';
import { CalendarIcon } from 'lucide-react';
import { ControllerRenderProps } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { useEffect, useState } from 'react';

type DobDatePickerProps = {
  field: ControllerRenderProps<any, string>;
};

export const DobDatePicker = ({ field }: DobDatePickerProps) => {
  const startYear = getYear(new Date()) - 100;
  const endYear = getYear(new Date()) + 100;
  const months = [...Array(12).keys()].map((i) => format(new Date(0, i), 'LLLL'));
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const [internalDate, setInternalDate] = useState<Date>(field.value || new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (field.value) {
      setInternalDate(field.value);
    }
  }, [field.value]);

  const handleMonthChange = (month: string) => {
    setInternalDate((prev) => setMonth(prev, months.indexOf(month)));
  };

  const handleYearChange = (year: string) => {
    setInternalDate((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(parseInt(year));
      return newDate;
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    field.onChange(date);
    setInternalDate(date);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-start">
        <div
          className={cn(
            'outline-buttondiv pl-3 text-left font-normal leading-none w-full',
            !field.value && 'text-muted-foreground',
          )}
        >
          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex justify-between p-2">
          <Select value={months[getMonth(internalDate)]} onValueChange={handleMonthChange}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={getYear(internalDate).toString()} onValueChange={handleYearChange}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Calendar
          mode="single"
          className="cursor-pointer"
          selected={field.value}
          onSelect={handleDateSelect}
          month={internalDate}
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DobDatePicker;
