import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const ComplexGSAP = () => {
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const tl= gsap.timeline();
  const boxRef = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const progBar = useRef();
  const maskText = useRef();

  useGSAP(() => {
    gsap.set(cardRef1.current, {
      transformStyle: "preserve-3d",
      transformPerspective: 1000,
    });
    gsap.to(cardRef1.current, {
      rotateY: 180,
      rotateX: 360,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });


    gsap.set(cardRef2.current, {
      transformStyle: "preserve-3d",
      transformPerspective: 1000,
    });
    gsap.to(cardRef2.current, {
      rotateY: 180,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });


    gsap.from('.image-gal',{
        y:100,
        opacity:0,
        stagger:{each:0.3,from:'edges'},
        repeat:-1,
        duration:2,
        yoyo:true,
    })


    tl.from('.loader',{
        y:50,
        stagger:0.1,
    })
      .to('.loader',{
          y:50,
          stagger:0.1   
      })
    tl.repeat(-1)


    gsap.to(boxRef.current, {
      duration: 5,
      repeat: -1,
      yoyo: true,
      motionPath: {
        path: "#path",      // the SVG path ID
        align: "#path",     // align the box along the path
        autoRotate: true,   // rotate along the path direction
        alignOrigin: [0.5, 0.5],
      },
      ease: "power1.inOut",
    });
    gsap.to(boxRef1.current, {
      duration: 5,
      repeat: -1,
      yoyo: true,
      motionPath: {
        path: "#path1",      // the SVG path ID
        align: "#path1",     // align the box along the path
        autoRotate: true,   // rotate along the path direction
        alignOrigin: [0.5, 0.5],
      },
      ease: "power1.inOut",
    });
    gsap.to(boxRef2.current,{
        duration:5,
        repeat:-1,
        yoyo:true,
        motionPath:{
            path:'#path2',
            align: '#path2',
            autoRotate: true,
            alignOrigin: [0.5 ,0.5],
        },
        ease: 'power1.inOut'
    })
    gsap.to(boxRef3.current,{
        duration:5,
        repeat:-1,
        yoyo:true,
        motionPath:{
            path: '#path3',
            align: '#path3',
            alignOrigin: [0.5,0.5],
            autoRotate:true,
        },
        ease: 'power1.inOut'
    })

    
    gsap.fromTo(progBar.current,{
        width: '0%'
    },{
        width: '100%',
        duration:3,
        ease: 'sine',
        repeat:-1,
    })


    // gsap.to(maskText.current,{
    //     xPercent: 100,
    //     duration:2,
    //     repeat:-1,
    //     ease: 'power1.inOut',
    //     yoyo:true,
    // })

    });

    const textRevealOn=()=>{
        gsap.to(maskText.current,{
            xPercent:100,
            duration:2,
            ease: 'power1.inOut',
        })
    }
    const textRevealOff=()=>{
        gsap.to(maskText.current,{
            xPercent:0,
            duration:2,
            ease: 'power1.inOut',
        })
    }

    return (
        <div className='text-white p-12 flex flex-col gap-12 overflow-hidden'>
            <h1 className='text-white text-5xl font-medium text-center'>
                Complex GSAP Exercises
            </h1>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Double Faced Card Flip</h1>
                <div className='relative h-72 w-52' ref={cardRef1}>
                    <div className='absolute inset-0 flex items-center justify-center font-bold text-2xl bg-green-300 backface-hidden'>
                        Front Side
                    </div>
                    <div
                        className='absolute inset-0 flex items-center justify-center font-bold text-2xl bg-red-300 backface-hidden'
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        Back Side
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Double Faced Text Flip</h1>
                <div className='relative w-48 h-16' ref={cardRef2}>
                    <div className='absolute inset-0 flex items-center justify-center font-bold text-2xl backface-hidden'>
                        Front Text
                    </div>
                    <div
                        className='absolute inset-0 flex items-center justify-center font-bold text-2xl backface-hidden'
                    style={{ transform: "rotateY(180deg)" }}
                    >
                        Back Text
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Image Gallery</h1>
                <div className='grid grid-cols-3 gap-y-8'>
                    <div className='image-gal bg-blue-200 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 1</div>
                    <div className='image-gal bg-blue-300 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 2</div>
                    <div className='image-gal bg-blue-400 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 3</div>
                    <div className='image-gal bg-blue-500 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 4</div>
                    <div className='image-gal bg-blue-600 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 5</div>
                    <div className='image-gal bg-blue-900 h-40 w-40 text-2xl flex justify-center items-center font-bold'>Image 6</div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Infinite Loader Animation</h1>
                <div className='flex gap-3'>
                    <div className='loader bg-blue-300 h-5 w-5 rounded-full'></div>
                    <div className='loader bg-blue-600 h-5 w-5 rounded-full'></div>
                    <div className='loader bg-blue-900 h-5 w-5 rounded-full'></div>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h1 className='text-3xl'>Path Tracing Animation</h1>
                <div className='flex flex-row gap-10 mt-5'>
                    <svg width="200" height="200">
                        <path
                        id="path"
                        d="M40,90 L50,30 L70,90 L10,40 L80,40  Z"
                        stroke="lightgray"
                        strokeWidth="3"
                        fill="none"
                        />
                    </svg>
                    <div
                        ref={boxRef}
                        style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: "red",
                        position: "absolute",
                        borderRadius: "50%",
                        }}
                    />
                    <img src="/path.jpg" className='w-80 h-80'  />
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h1 className='text-3xl'>Path Tracing Animation-Curve(2 curve points)</h1>
                <div className='flex flex-col gap-10 mt-5'>
                    <svg width="550" height="300">
                        <path
                        id="path1"
                        d="M50,200 C150,100 450,300 550,200"
                        stroke="lightgray"
                        strokeWidth="3"
                        fill="none"
                        />
                    </svg>
                    <div
                        ref={boxRef1}
                        style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "red",
                        position: "absolute",
                        borderRadius: "50%",
                        }}
                    />
                    <img src="/path1.jpg" className='w-80 h-80'  />
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h1 className='text-3xl'>Path Tracing Animation-Curve(1 curve point)</h1>
                <div className='flex flex-row gap-10 mt-5'>
                    <svg width='350px' height='350px'>
                        <path
                        id='path2'
                        stroke='lightgray'
                        strokeWidth='3'
                        d='M50,300 Q175,50 300,300'
                        fill='none'>
                        </path>
                    </svg>
                    <div
                        ref={boxRef2}
                        style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "red",
                        position: "absolute",
                        borderRadius: "50%",
                        }}
                    />
                    <img src="/path2.jpg" className='w-70 h-80'  />
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5">
                <h1 className='text-3xl'>Path Tracing Animation-Curve(3 curve point)</h1>
                <div className='flex flex-col gap-10 mt-5'>
                    <svg height='275px' width='500px'>
                        <path
                            id='path3'
                            stroke='lightgray'
                            strokeWidth='3'  
                            d='M50,250 Q150,50 250,250 C250,250 350,50 450,250' 
                            fill='none'                     >
                        </path>
                    </svg>
                    <div
                        ref={boxRef3}
                        style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "red",
                        position: "absolute",
                        borderRadius: "50%",
                        }}
                    />
                    <img src="/path3.jpg" className='w-150 h-80'  />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl'>Progress Bar</h1>
                <div className='p-1 bg-gray-400'>
                    <div className='bg-blue-900 h-5  rounded-lg' ref={progBar}></div>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
                <h1 className="text-3xl">Text Reveal</h1>
                <div onMouseEnter={textRevealOn} onMouseLeave={textRevealOff} className="bg-neutral-700 px-4 py-2 text-2xl inline-block relative overflow-hidden">
                    SOME RANDOM TEXT
                    <span ref={maskText} className='absolute inset-0 backdrop-blur-2xl flex items-center justify-center' style={{transform: 'translateX(0%)'}}>Hover Me</span>
                </div>
            </div>
        </div>
    );
};

export default ComplexGSAP;
