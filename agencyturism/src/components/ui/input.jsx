import React from 'react';

const Input = ({ className = '', ...props }) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <input
      className={`${baseStyle} ${className}`}
      {...props}
    />
  );
};

export { Input };

