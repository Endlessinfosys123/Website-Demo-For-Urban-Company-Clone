'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Premium Card with glassmorphism and hover effects
 */
export const Card = ({ 
  children, 
  className, 
  glass = false,
  hover = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { 
  glass?: boolean,
  hover?: boolean
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={cn(
        "rounded-[40px] border border-slate-100 bg-white p-8 transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]",
        glass && "bg-white/70 backdrop-blur-xl border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * Premium Button with high impact
 */
export const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' 
}) => {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-primary shadow-xl shadow-slate-900/10",
    secondary: "bg-primary text-white hover:opacity-90 shadow-xl shadow-primary/20",
    outline: "bg-transparent border-2 border-slate-200 text-slate-900 hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-50",
  };

  return (
    <button
      className={cn(
        "px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Premium Input with subtle focus effects
 */
export const Input = ({ 
  className, 
  icon,
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) => {
  return (
    <div className="relative group w-full">
      {icon && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
          {icon}
        </div>
      )}
      <input
        className={cn(
          "w-full bg-slate-50 border-2 border-transparent py-4 rounded-2xl outline-none transition-all",
          "focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5",
          icon ? "pl-14 pr-6" : "px-6",
          className
        )}
        {...props}
      />
    </div>
  );
};

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
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span className={cn(
      "px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};
