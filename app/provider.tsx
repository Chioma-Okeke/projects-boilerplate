'use client'

import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
    isServer,
} from '@tanstack/react-query'
import { AppProgressProvider as ProgressProvider } from '@bprogress/next'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000, // 5 minutes
                retry: false,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (isServer) {
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}

function Provider({ children }: { children: React.ReactNode }) {
    const queryClient = getQueryClient()

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <ProgressProvider
                    height="5px"
                    color="#5B4CCC"
                    options={{ showSpinner: false }}
                    shallowRouting
                >
                    {children}
                </ProgressProvider>
            </QueryClientProvider>
        </div>
    )
}

export default Provider