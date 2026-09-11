"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar1 } from "lucide-react";

const formatPersianDate = (value: Date) =>
  new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(value);

type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  label?: string;
  invalid?: boolean;
};

export function DatePicker({
  value,
  onChange,
  label = "تاریخ پیشنهادی",
  invalid = false,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date>();
  const selectedDate = value ?? internalDate;

  const handleSelect = (nextDate?: Date) => {
    if (onChange) {
      onChange(nextDate);
      return;
    }

    setInternalDate(nextDate);
  };

  return (
    <Field className="w-full text-[#b9b5ac]">
      <FieldLabel htmlFor="date-picker-simple" className="text-white">
        {label}
      </FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="datePicker"
              id="date-picker-simple"
              className={
                invalid ? "border-b-red-600 hover:border-b-red-600" : ""
              }
            >
              {selectedDate ? (
                formatPersianDate(selectedDate)
              ) : (
                <div className="flex justify-between w-full">
                  <span>تاریخ را انتخاب کنید </span> <Calendar1 />
                </div>
              )}
            </Button>
          }
        />
        <PopoverContent className="w-full p-0 bg-[#14161a]" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            defaultMonth={selectedDate}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
