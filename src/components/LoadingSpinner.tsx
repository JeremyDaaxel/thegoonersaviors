
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4'
  };

  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className={`${sizeClasses[size]} rounded-full border-t-transparent border-blue-500 animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;
