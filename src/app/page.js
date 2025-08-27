import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import InfiniteScrollAnimation from '@/components/InfiniteScrollAnimation'
const page = () => {
  return (
    <>
      <div className='h-screen bg-blue-500' />
      <AnimatedText />
      <div className='h-screen bg-blue-500' />
      <InfiniteScrollAnimation />
    </>
  )
}

export default page