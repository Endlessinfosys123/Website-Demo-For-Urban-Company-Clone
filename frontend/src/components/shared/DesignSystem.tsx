'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Clean, bordered card matching UC style
 */
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-slate-200 bg-white p-6 shadow-sm",
          hover && "hover:shadow-md transition-shadow cursor-pointer",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

/**
 * Utilitarian button
 */
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' }>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-slate-100 text-black hover:bg-slate-200",
      outline: "bg-transparent border border-slate-300 text-black hover:border-black",
      ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-black",
      danger: "bg-red-50 text-red-600 hover:bg-red-100",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

/**
 * Simple, clean Input
 */
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-white border border-slate-300 py-3 rounded-lg outline-none transition-all",
            "focus:border-black focus:ring-1 focus:ring-black placeholder:text-slate-400 text-sm",
            icon ? "pl-10 pr-4" : "px-4",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

/**
 * Badge for status indicators
 */
export const Badge = ({ 
  children, 
  variant = 'default',
  className
}: { 
  children: React.ReactNode, 
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info',
  className?: string
}) => {
  const variants = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-green-50 text-green-700 border border-green-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    error: "bg-red-50 text-red-700 border border-red-200",
    info: "bg-blue-50 text-blue-700 border border-blue-200",
  };

  return (
    <span className={cn(
      "px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
