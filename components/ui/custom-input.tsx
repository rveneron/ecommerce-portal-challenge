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
      <div className={cn('flex flex-col', className)}>
        {label && <label className="mb-1 text-sm text-[#676767]">{label}</label>}
        <div
          className={cn(
            'flex h-full w-full items-center rounded-md border border-input bg-background text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50'
          )}
        >
          {startAdornment}
          <input
            type={type}
            className={
              'input flex-1 p-2 placeholder:text-muted-foreground focus:outline-none disabled:opacity-50'
            }
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
