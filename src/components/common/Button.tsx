import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "text-white shadow-lg hover:shadow-xl",
    secondary: "text-white hover:opacity-90",
    outline: "border-2 hover:shadow-md",
    hero: "text-white hover:shadow-2xl hover:scale-105"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#343434',
      borderColor: '#343434'
    },
    secondary: {
      backgroundColor: '#C0C0C0',
      borderColor: '#C0C0C0'
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: '#343434',
      color: '#343434'
    },
    hero: {
      background: 'linear-gradient(135deg, #343434 0%, #505050 100%)',
      borderColor: 'transparent'
    }
  };

  return (
    <motion.button
      whileHover={{ scale: variant === 'hero' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        ...variantStyles[variant],
        ...(props.style || {})
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;