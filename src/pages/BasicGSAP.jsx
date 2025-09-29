import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin);

const BasicGSAP = () => {
    const btnref= useRef();
    const handleEnter=()=>{
        gsap.to(btnref.current,{
            scale:1.2,
            duration:0.3,
            ease:'power1.inOut'
        })
    }
    const handleLeave=()=>{
        gsap.to(btnref.current,{
            scale:1,
            duration:0.3,
            ease:'power1.inOut'
        })
    }

    const tl= gsap.timeline();

    useGSAP(()=>{
        gsap.to('#yellow-box',{
            x:300,
            ease: 'power1.inOut',
            duration:2,
            repeat:-1,
            yoyo:true
        })


        gsap.fromTo('#green-box',{
            opacity:0,
        },{
            opacity: 1,
            duration: 1.5,
            repeat:-1,
            yoyo:true
        })


        gsap.to('#red-box',{
            scale: 1.5,
            duration: 1,
            repeat:-1,
            yoyo:true
        })


        gsap.to('#blue-box',{
            backgroundColor: 'red',
            duration: 3,
            repeat:-1,
            yoyo:true, 
            ease: 'none'     
        })


        gsap.to('#white-box',{
            rotation: 360,
            duration: 2,
            repeat:-1,
            ease: 'none',
        })


        gsap.fromTo('#gray-box',{
            y:-200
        },{
            y: 0,
            duration: 1,
            repeat:-1,
            ease: 'bounce.out',
        })


        gsap.fromTo('#gray-circle',{
            x:-200,
            opacity:0,
        },{
            x:0,
            opacity:1,
            duration: 1,
            stagger:0.3,
            repeat:-1,
            ease: 'power1.inOut',
        })


        tl.from('.text1',{
            opacity:0,
            duration:1.5,
            yoyo:true,
        })
         .from('.text2',{
            x:-200,
            opacity:0,
            duration:1,
            yoyo:true,
         })
         .fromTo('.text3',{
            opacity:0,
            scale:0.8,
         },{
            opacity:1,
            scale:1,
            duration:1,
            yoyo:true,
         })
        tl.repeat(-1);
        tl.yoyo(true);
    
        gsap.to('.shape',{
            borderRadius: '50%',
            duration: 1,
            repeat:-1,
            yoyo:true,
        })
    })
  return (
    <div>
        <h1 className='text-white text-5xl p-12 font-medium text-center'>Basic GSAP Exercises</h1>
        <div className='text-white p-12 flex flex-col gap-12'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Simple Tween</h1>
                <div className='h-30 w-30 bg-yellow-300' id='yellow-box'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Fade In & Fade Out</h1>
                <div className='h-30 w-30 bg-green-300' id='green-box'></div>
            </div>
            <div className='flex flex-col gap-9'>
                <h1 className='text-3xl'>Scale Up and Scale Down</h1>
                <div className='h-30 w-30 bg-red-300' id='red-box'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Colour Change</h1>
                <div className='h-30 w-30 bg-blue-500' id='blue-box'></div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Rotate</h1>
                <div className='h-30 w-30 bg-white' id='white-box'></div>
            </div>
            <div className='flex flex-col gap-20'>
                <h1 className='text-3xl'>Bounce</h1>
                <div className='h-30 w-30 bg-gray-300' id='gray-box'></div>
            </div>
            <div className='flex flex-col gap-20'>
                <h1 className='text-3xl'>Stagger Animation</h1>
                <div className='flex flex-row gap-5 flex-wrap'>
                    <div className='h-30 w-30 bg-gray-300 rounded-full' id='gray-circle'></div>
                    <div className='h-30 w-30 bg-gray-300 rounded-full' id='gray-circle'></div>
                    <div className='h-30 w-30 bg-gray-300 rounded-full' id='gray-circle'></div>
                    <div className='h-30 w-30 bg-gray-300 rounded-full' id='gray-circle'></div>
                    <div className='h-30 w-30 bg-gray-300 rounded-full' id='gray-circle'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl'>Hover Animation</h1>
                <div className='h-30 w-30 bg-neutral-700' ref={btnref} onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
            </div>
            <div className="flex flex-col gap-4  text-2xl font-bold">
                <h1 className='text-3xl'>Text Animation</h1>
                <div className='text1 text-6xl text-cyan-800'>Hello</div>
                <div className='text2 text-6xl text-amber-500'>I am learning</div>
                <div className='text3 text-6xl text-pink-500'>GSAP 🚀</div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-3xl'>BorderRadius</h1>
                <div className='shape h-30 w-30 bg-blue-950'></div>
            </div>
        </div>
    </div>
  )
}

export default BasicGSAP