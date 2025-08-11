import React from 'react';

const Textarea = ({ className = '', ...props }) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical';

  return (
    <textarea
      className={`${baseStyle} ${className}`}
      {...props}
    />
  );
};

export { Textarea };

