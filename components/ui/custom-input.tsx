import * as React from 'react';
import { cn } from '@/lib/utils';

export interface Props extends React.ComponentProps<'input'> {
  label?: string;
  helperText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const CustomInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, helperText, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && <label className="mb-1 text-sm text-[#676767]">{label}</label>}
        <div
          className={cn(
            'flex h-10 w-full items-center rounded-md border border-input bg-background text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
        >
          {startAdornment}
          <input
            type={type}
            className={cn(
              'flex-1 p-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50',
              'input'
            )}
            ref={ref}
            {...props}
          />
          {endAdornment}
        </div>
        {helperText && <span className="mt-1 text-xs text-muted-foreground">{helperText}</span>}
      </div>
    );
  }
);

CustomInput.displayName = 'CustomInput';

export { CustomInput };
