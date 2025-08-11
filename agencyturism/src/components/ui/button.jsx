import React from 'react';

const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  const sizes = {
    default: 'text-base',
    sm: 'text-sm px-3 py-1.5',
    lg: 'text-lg px-6 py-3',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };


