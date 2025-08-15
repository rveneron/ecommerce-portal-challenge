'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        contained: 'text-primary-foreground',
        outline: 'relative overflow-hidden border bg-transparent',
        withIcon: 'text-primary-foreground justify-between',
        ghost: '',
        grey: 'bg-slate-50 hover:bg-slate-100 hover:shadow-none shadow-none'
      },
      size: {
        default: 'h-[50px] gap-[30px] px-5 py-[15px] rounded-[15px]',
        sm: 'h-9 rounded-[15px] px-3',
        lg: 'gap-[50px] px-[30px] py-[22px] rounded-[15px] left-5 top-5',
        icon: 'h-10 w-10'
      },
      color: {
        primary: '',
        secondary: ''
      }
    },
    defaultVariants: {
      variant: 'contained',
      size: 'default',
      color: 'primary'
    }
  }
);

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>['color']>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  noShadow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  color?: ButtonColor;
  variant?: ButtonVariant;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      icon,
      color = 'primary',
      variant = 'contained',
      iconPosition = 'right',
      noShadow = false,
      asChild = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const getColorClasses = (variant: ButtonVariant, color: ButtonColor) => {
      const colorMap = {
        contained: {
          primary: cn(
            'bg-btn-primary text-white hover:bg-btn-primary-hover',
            !noShadow && 'shadow-primary',
            disabled && 'btn-primary-disabled cursor-not-allowed'
          ),
          secondary: cn(
            'bg-btn-secondary text-white hover:bg-btn-secondary-hover',
            !noShadow && 'shadow-secondary',
            disabled && 'btn-secondary-disabled cursor-not-allowed'
          )
        },
        outline: {
          primary: cn(
            'border-primary border-2 text-primary hover:shadow-primary',
            disabled && 'text-primary/50 border-primary/50 cursor-not-allowed'
          ),
          secondary: cn(
            'border-secondary border-2 text-secondary hover:shadow-secondary',
            disabled && 'text-secondary/50 border-secondary/50 cursor-not-allowed'
          )
        },
        withIcon: {
          primary: cn(
            'bg-btn-primary text-white hover:bg-btn-primary-hover',
            !noShadow && 'shadow-primary',
            disabled && 'text-gray-200 opacity-50 cursor-not-allowed'
          ),
          secondary: cn(
            'bg-btn-secondary text-white hover:bg-btn-secondary-hover',
            !noShadow && 'shadow-secondary',
            disabled && 'text-gray-200 opacity-50 cursor-not-allowed'
          )
        },
        ghost: {
          primary: cn('relative'),
          secondary: cn('relative')
        },
        grey: {
          primary: cn('relative'),
          secondary: cn('relative')
        }
      };
      return colorMap[variant][color];
    };

    const iconPositionClass = {
      left: 'flex-row',
      right: 'flex-row-reverse',
      top: 'flex-col',
      bottom: 'flex-col-reverse'
    }[iconPosition];

    // Ripple effect handler
    const handleRipple = (e: React.MouseEvent) => {
      const button = e.currentTarget as HTMLElement;
      const ripple = document.createElement('span');
      const size = button.offsetWidth;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple';

      button.appendChild(ripple);

      // Remove the ripple element after animation completes
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    return (
      <Comp
        className={cn(
          getColorClasses(variant, color),
          buttonVariants({ variant, size, className })
        )}
        disabled={disabled}
        ref={ref}
        onClick={variant === 'outline' ? handleRipple : undefined} // Only add ripple for the outline variant
        {...props}
      >
        <div
          className={cn(
            'flex w-full flex-1 flex-row items-center',
            size === 'icon' ? 'gap-0' : 'gap-2',
            icon ? 'justify-between' : 'justify-center',
            iconPositionClass
          )}
        >
          {icon && <span className="flex items-center justify-center">{icon}</span>}
          {children && <span className={'button-content'}>{children}</span>}
        </div>
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
