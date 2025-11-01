"use client";

import React, { useState } from 'react';
import { Navbar, Loader, InlineLoader, ButtonLoader, PageLoader } from '@/components';

export default function ComponentsDemo() {
    const [showPageLoader, setShowPageLoader] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const handleButtonClick = () => {
        setIsButtonLoading(true);
        setTimeout(() => {
            setIsButtonLoading(false);
        }, 2000);
    };

    const handlePageLoaderToggle = () => {
        setShowPageLoader(true);
        setTimeout(() => {
            setShowPageLoader(false);
        }, 3000);
    };

    return (
        <>
            <Navbar />

            {showPageLoader && <PageLoader text="Loading page..." />}

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Component Demo
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Navbar and Loader components showcase
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Loader Variants */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Loader Variants
                            </h2>

                            <div className="space-y-8">
                                {/* Spinner Loaders */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Spinner Loaders
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6">
                                        <div className="text-center">
                                            <Loader size="sm" variant="spinner" />
                                            <p className="text-sm text-gray-500 mt-2">Small</p>
                                        </div>
                                        <div className="text-center">
                                            <Loader size="md" variant="spinner" />
                                            <p className="text-sm text-gray-500 mt-2">Medium</p>
                                        </div>
                                        <div className="text-center">
                                            <Loader size="lg" variant="spinner" />
                                            <p className="text-sm text-gray-500 mt-2">Large</p>
                                        </div>
                                        <div className="text-center">
                                            <Loader size="xl" variant="spinner" />
                                            <p className="text-sm text-gray-500 mt-2">Extra Large</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Dots Loaders */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Dots Loaders
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6">
                                        <div className="text-center">
                                            <Loader size="sm" variant="dots" />
                                            <p className="text-sm text-gray-500 mt-2">Small</p>
                                        </div>
                                        <div className="text-center">
                                            <Loader size="md" variant="dots" />
                                            <p className="text-sm text-gray-500 mt-2">Medium</p>
                                        </div>
                                        <div className="text-center">
                                            <Loader size="lg" variant="dots" />
                                            <p className="text-sm text-gray-500 mt-2">Large</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pulse Loaders */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Pulse Loaders
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-6">
                                        <Loader size="md" variant="pulse" />
                                        <Loader size="lg" variant="pulse" text="Loading content..." />
                                    </div>
                                </div>

                                {/* Skeleton Loader */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Skeleton Loader
                                    </h3>
                                    <Loader variant="skeleton" text="Loading user data..." />
                                </div>
                            </div>
                        </div>

                        {/* Interactive Examples */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Interactive Examples
                            </h2>

                            <div className="space-y-6">
                                {/* Button with Loader */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Button Loading State
                                    </h3>
                                    <button
                                        onClick={handleButtonClick}
                                        disabled={isButtonLoading}
                                        className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors"
                                    >
                                        {isButtonLoading && <ButtonLoader />}
                                        {isButtonLoading ? 'Processing...' : 'Click me'}
                                    </button>
                                </div>

                                {/* Inline Loader */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Inline Loading
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 flex items-center">
                                        Fetching data <InlineLoader className="ml-2" />
                                    </p>
                                </div>

                                {/* Full Screen Loader */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Full Screen Loader
                                    </h3>
                                    <button
                                        onClick={handlePageLoaderToggle}
                                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                                    >
                                        Show Full Screen Loader
                                    </button>
                                </div>

                                {/* Custom Loader with Text */}
                                <div>
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                                        Loader with Custom Text
                                    </h3>
                                    <Loader
                                        size="lg"
                                        variant="spinner"
                                        text="Please wait while we process your request..."
                                        className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Usage Instructions */}
                    <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Usage Instructions
                        </h2>

                        <div className="prose dark:prose-invert max-w-none">
                            <h3>Navbar Component</h3>
                            <p>Simply import and use the Navbar component at the top of your layout:</p>
                            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                                <code>{`import { Navbar } from '@/components';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}`}</code>
                            </pre>

                            <h3>Loader Component</h3>
                            <p>The Loader component supports multiple variants and sizes:</p>
                            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                                <code>{`import { Loader, InlineLoader, ButtonLoader, PageLoader } from '@/components';

// Basic usage
<Loader size="md" variant="spinner" />

// With text
<Loader size="lg" variant="dots" text="Loading..." />

// Full screen
<PageLoader text="Loading page..." />

// In buttons
<ButtonLoader />

// Inline
<InlineLoader />`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}