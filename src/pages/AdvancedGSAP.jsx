import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { use, useState } from 'react'

const AdvancedGSAP = () => {
    const [tlState,setTlState]= useState('Waiting');

    
     useGSAP(() => {
        const tl= gsap.timeline();
        tl.to('.g-box', {
            keyframes: [
            { x: 100},
            { y: 100},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
            repeat: -1,
            yoyo: true,
        })
        .to('.b-box', {
            keyframes: [
            { x: 100, },
            { y: -100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
            repeat: -1,
            yoyo: true,
        },"-=1")
        .to('.y-box', {
            keyframes: [
            { x: -100,},
            { y: -100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
            repeat: -1,
            yoyo: true,
        },"-=1")
        .to('.r-box', {
            keyframes: [
            { x: -100,},
            { y: 100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
            repeat: -1,
            yoyo: true,
        },"-=1")

        const tl2= gsap.timeline({
            onStart: () => setTlState('Started'),
            onUpdate: () => setTlState('In Progress'),
            onComplete: () => setTlState('Completed'),
        });
        tl2.delay(2)
        tl2.to('.g-box1', {
            keyframes: [
            { x: 100},
            { y: 100},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
        })
        .to('.b-box1', {
            keyframes: [
            { x: 100, },
            { y: -100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
        },"-=0.5")
        .to('.y-box1', {
            keyframes: [
            { x: -100,},
            { y: -100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
        },"-=0.5")
        .to('.r-box1', {
            keyframes: [
            { x: -100,},
            { y: 100,},
            ],
            opacity: 0,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 1,
        },"-=0.5")
        tl2.repeat(5).yoyo( true );
     });


    return (
        <div className='text-white p-12 flex flex-col gap-12'>
            <h1 className='text-5xl font-bold text-center'>Advanced GSAP Animations</h1>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl'>Timeline Overlap</h1>
                    <div className='flex items-center justify-center'>
                        <div className='flex w-60 flex-wrap'>
                            <div className='y-box bg-yellow-300 h-30 w-30 mr-0'></div>
                            <div className='b-box bg-blue-300 h-30 w-30'></div>
                            <div className='r-box bg-red-300 h-30 w-30 mr-0'></div>
                            <div className='g-box bg-green-300 h-30 w-30' style={{x:0,y:0,opacity:1}}></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl'>Timeline State</h1>
                    <div className='flex items-center justify-center flex-col'>
                        <div className='flex w-60 flex-wrap'>
                            <div className='y-box1 bg-yellow-600 h-30 w-30 mr-0'></div>
                            <div className='b-box1 bg-blue-600 h-30 w-30'></div>
                            <div className='r-box1 bg-red-600 h-30 w-30 mr-0'></div>
                            <div className='g-box1 bg-green-600 h-30 w-30' style={{x:0,y:0,opacity:1}}></div>
                        </div>
                        <h1>State:{tlState}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedGSAP