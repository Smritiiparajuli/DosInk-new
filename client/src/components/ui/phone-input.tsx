import { Input } from "./input";
import Flag from "react-world-flags";
import { Command, CommandInput, CommandList, CommandItem } from "./command";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { useState } from "react";
import rawCountries from "world-countries";
import { getCountryCallingCode, isSupportedCountry } from "libphonenumber-js";
import { cn } from "../../lib/utils";
import { useEffect, useRef } from "react";
import { forwardRef } from "react";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultCountry?: string;
  international?: boolean;
}

const getValidCountryCallingCode = (
  countryCode: keyof typeof getCountryCallingCode
) => {
  return isSupportedCountry(countryCode);
};

const countries = rawCountries.reduce<
  { code: string; name: string; dialCode: string }[]
>((acc, country) => {
  if (!country.idd.root || !country.cca2) return acc;

  const countryCode = country.cca2 as keyof typeof getCountryCallingCode;
  if (!getValidCountryCallingCode(countryCode)) return acc;

  acc.push({
    code: country.cca2,
    name: country.name.common,
    dialCode: `+${getCountryCallingCode(countryCode)}`,
  });
  return acc;
}, []);

const flagMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = countries.reduce(
  (acc, country) => {
    acc[country.code] = (props: { className?: string }) => (
      <Flag code={country.code} {...props} />
    );
    return acc;
  },
  {} as Record<string, React.ComponentType<{ className?: string }>>
);

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value,
      onChange,
      onBlur,
      placeholder,
      defaultCountry,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedCountry, setSelectedCountry] = useState(
      countries.find((country) => country.code === defaultCountry) ||
        countries[0]
    );
    const [inputValue, setInputValue] = useState(
      value ? value.replace(selectedCountry.dialCode, "") : ""
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const FlagComponent = flagMap[selectedCountry.code];

    const searchInputRef = useRef<HTMLInputElement>(null);

    const dialingCode = selectedCountry.dialCode;

    useEffect(() => {
      if (value && value.startsWith(dialingCode)) {
        setInputValue(value.replace(dialingCode, ""));
      }
    }, [value, dialingCode]);

    useEffect(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [searchQuery]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      onChange?.({
        target: { value: `${dialingCode}${newValue}` },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    };

    return (
      <div className="flex items-center w-full">
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger
            className="outline-buttondiv items-center space-x-1 rounded-r-none border-r-0"
            onClick={() => setIsPopoverOpen(true)}
          >
            <FlagComponent className="w-5 h-3" />
            <span>{selectedCountry.dialCode}</span>
          </PopoverTrigger>

          <PopoverContent>
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList className="p-2">
                {countries.map((country) => {
                  const CountryFlag = flagMap[country.code];
                  return (
                    <CommandItem
                      key={country.code}
                      value={country.name}
                      onSelect={() => {
                        setSelectedCountry(country);
                        setSearchQuery(country.name);
                        onChange?.({
                          target: { value: `${inputValue}` },
                        } as unknown as React.ChangeEvent<HTMLInputElement>);
                        setIsPopoverOpen(false);
                      }}
                    >
                      <div className="flex space-x-2 cursor-pointer items-center justify-center w-full">
                        <CountryFlag className="w-5 h-3" />
                        <div className="flex items-center space-x-2 justify-between w-full">
                          <span>{country.name}</span>
                          <span className="text-muted-foreground">
                            {country.dialCode}
                          </span>
                        </div>
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Input
          type="tel"
          placeholder={placeholder || "Enter phone number"}
          className={cn("flex-1 rounded-l-none", className)}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={onBlur}
        />

        <input
          ref={ref}
          readOnly
          value={`${selectedCountry.dialCode}${inputValue}`}
          onChange={onChange}
          hidden
          {...props}
        />
      </div>
    );
  }
);
