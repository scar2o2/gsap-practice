import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const ModerateGSAP = () => {
    const tl= gsap.timeline();
    const tl1= gsap.timeline();
    const tl2= gsap.timeline();
    useGSAP(()=>{
        tl.to('.blue-box',{
            x: 75,
            rotate: 15,
            opacity: 0.6,
            stagger: 0.3,
            duration: 0.3,
        })
          .to('.blue-box',{
            x: 150,
            rotate: 30,
            opacity: 0.3,
            stagger: 0.3,
            duration: 0.3,
          })
          .to('.blue-box',{
            x: 225,
            rotate: 45,
            opacity: 0,
            stagger: 0.3,
            duration: 0.3,
          })
        tl.repeat(-1);
        tl.yoyo(true);

        tl1.from('.neutral-box',{
            x: 300,
            opacity: 0,
            duration: 5,
            ease: 'power1.in',
            delay: 1,
            // we can see that it does not stay in its initial state for the delay period
            repeat:-1,
            yoyo:true
        })
        tl2.from('.neutral-box1',{
            x: 300,
            opacity: 0,
            duration: 5,
            ease: 'power1.in',
            delay: 1,
            immediateRender: false,   //we can see that it stays in its initial state for the delay period
            repeat:-1,
            yoyo:true
        })

        gsap.to('.red-box',{
            x: ()=>Math.random()*300,
            duration: 3,
            ease: 'power1.inOut',
            delay: 1,
            repeat:-1,
            yoyo:true,
            repeatRefresh:true,  // we can see that it goes to a new random position on every repeat
        })
        gsap.to('.red-box1',{
            x: ()=>Math.random()*1000,
            duration: 3,
            ease: 'power1.inOut',
            delay: 1,
            repeat:-1,
            yoyo:true,
            // we can see that it goes to the same random position on every repeat
        })
        gsap.to('.green-box',{
            x:300,
            duration: 3,    
            ease: 'power1.inOut',
            repeat:-1,
            yoyo:true,
            yoyoEase: 'circ'  //ease is applied in both forward and backward direction
        })
        gsap.to('.green-box1',{ 
            x:300,
            duration: 3,
            ease: 'power1.inOut',
            repeat:-1,
            yoyo:true,
            // ease is applied only in forward direction
            // in backward direction it goes with linear ease(default)
            // yoyoEase lets us set ease for backward direction 
        })
        gsap.to('.pink-circle',{
            y: -90,
            ease: 'expo.in',
            duration: 2,
            repeat: -1,
            stagger: {each:0.5,from: 'random'},
            yoyo: true,
            repeatRefresh: true
        })
        gsap.from('.hello-letter',{
            y:-40,
            opacity: 0,
            repeat:-1,
            yoyo: true,
            ease: 'expo.in',
            duration: 2,
            stagger:0.3
        })
    })
    return (
        <div className='text-white p-12 flex flex-col gap-12'>
            <h1 className='text-white text-5xl  font-medium text-center'>Moderate GSAP Exercises</h1>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Timeline + Stagger</h1>
                <div className='flex flex-row gap-9'>
                    <div className='blue-box h-30 w-30 bg-blue-300'></div>
                    <div className='blue-box h-30 w-30 bg-blue-600'></div>
                    <div className='blue-box h-30 w-30 bg-blue-900'></div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>immediateRender test</h1>
                <div className='flex flex-row gap-9'>
                    <div className='neutral-box h-30 w-30 bg-neutral-400 justify-center flex items-center'>iR:True <br />delay is not applied even when set(when loaded)</div>
                    <div className='neutral-box1 h-30 w-30 bg-neutral-400 justify-center flex items-center'>iR:False<br />delay is applied when set(when loaded)</div>
                </div>
            </div>
            <div className='flex flex-col gap-3 overflow-hidden'>
                <h1 className='text-3xl'>repeatRefresh test</h1>
                <div className='flex flex-row gap-9'>
                    <div className='red-box h-30 w-30 bg-red-400 justify-center flex items-center'>rR:True <br />x value changes fro every repeat</div>
                    <div className='red-box1 h-30 w-30 bg-red-400 justify-center flex items-center'>rR:False <br />x value is same for every repeat</div>
                </div>
            </div>
            <div className='flex flex-col gap-3 overflow-hidden'>
                <h1 className='text-3xl'>yoyoEase test</h1>
                <div className='flex flex-row gap-9'>
                    <div className='green-box h-30 w-30 bg-green-400 justify-center flex items-center'>yoyoEase is set to circ</div>
                    <div className='green-box1 h-30 w-30 bg-green-400 justify-center flex items-center'>yoyoEase is not set</div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden gap-30'>
                <h1 className='text-3xl'>Stagger in Random Order</h1>
                <div className='flex flex-row gap-9'>
                    <div className='pink-circle h-30 w-30 bg-pink-300 justify-center flex items-center rounded-full'></div>
                    <div className='pink-circle h-30 w-30 bg-pink-400 justify-center flex items-center rounded-full'></div>
                    <div className='pink-circle h-30 w-30 bg-pink-500 justify-center flex items-center rounded-full'></div>
                    <div className='pink-circle h-30 w-30 bg-pink-500 justify-center flex items-center rounded-full'></div>
                </div>
            </div>
            <div className='flex flex-col overflow-hidden gap-6'>
                <h1 className='text-3xl'>Stagger</h1>
                <div className='flex flex-row gap-4'>
                    <div className='hello-letter justify-center flex items-center rounded-full text-8xl font-bold'>H</div>
                    <div className='hello-letter justify-center flex items-center rounded-full text-8xl font-bold'>E</div>
                    <div className='hello-letter justify-center flex items-center rounded-full text-8xl font-bold'>L</div>
                    <div className='hello-letter justify-center flex items-center rounded-full text-8xl font-bold'>L</div>
                    <div className='hello-letter justify-center flex items-center rounded-full text-8xl font-bold'>O</div>
                </div>
            </div>
        </div>
    )
}

export default ModerateGSAP