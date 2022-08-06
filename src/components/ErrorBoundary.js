import React from 'react'

const ErrorBoundary = ({ error }) => {
  return (
    <div className='flex h-auto w-full flex-col items-center justify-center rounded-lg bg-red-100 p-5 text-red-500'>
      Oops, something went wrong
      <details className='mt-3'>{error.message}</details>
    </div>
  )
}

export default ErrorBoundary
