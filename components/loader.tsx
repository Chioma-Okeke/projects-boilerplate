"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  variant = 'spinner',
  className = '',
  text = '',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const SpinnerLoader = () => (
    <div className="flex flex-col items-center space-y-2">
      <Loader2 className={cn('animate-spin text-blue-600', sizeClasses[size])} />
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  const DotsLoader = () => (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={cn(
              'bg-blue-600 rounded-full animate-bounce',
              size === 'sm' ? 'w-2 h-2' : 
              size === 'md' ? 'w-3 h-3' :
              size === 'lg' ? 'w-4 h-4' : 'w-5 h-5',
              index === 0 ? '[animation-delay:0ms]' :
              index === 1 ? '[animation-delay:100ms]' : '[animation-delay:200ms]'
            )}
          />
        ))}
      </div>
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  const PulseLoader = () => (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={cn(
          'bg-blue-600 rounded-full animate-pulse',
          sizeClasses[size]
        )}
      />
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  const SkeletonLoader = () => (
    <div className="w-full max-w-sm animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 dark:bg-gray-700 w-12 h-12"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
          {text}
        </p>
      )}
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'skeleton':
        return <SkeletonLoader />;
      default:
        return <SpinnerLoader />;
    }
  };

  const loaderContent = (
    <div className={cn('flex items-center justify-center', className)}>
      {renderLoader()}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

// Component for inline loading states
export const InlineLoader: React.FC<{ className?: string }> = ({ className }) => (
  <Loader2 className={cn('animate-spin w-4 h-4 text-gray-500', className)} />
);

// Component for button loading states
export const ButtonLoader: React.FC<{ className?: string }> = ({ className }) => (
  <Loader2 className={cn('animate-spin w-4 h-4 mr-2', className)} />
);

// Component for page loading states
export const PageLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <Loader size="lg" variant="spinner" text={text} fullScreen />
);

export default Loader;