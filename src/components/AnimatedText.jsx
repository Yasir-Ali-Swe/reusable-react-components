"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const AnimatedText = () => {
    useGSAP(() => {
        const splitText = SplitText.create(".tagetText",
            { type: "chars" }
        )
        const tl = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: ".targetDiv",
                    start: "top 20%",
                    toggleActions: "play none none reverse",
                }
            }
        )
        tl.from(splitText.chars, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.05,
            ease: "back.out(1.7)",
        })
    })
    return (
        <div className='targetDiv relative h-screen bg-black flex flex-col justify-center items-center'>
            <h1 className='tagetText text-9xl font-bold text-white'>Yasir Ali</h1>
        </div>
    )
}

export default AnimatedText