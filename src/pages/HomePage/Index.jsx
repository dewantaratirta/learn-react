import Container from '@/components/container'
import { FadeText } from '@/components/ui/fade-text'
import { cn } from '@/lib/utils'
import GridPattern from '@/components/ui/grid-pattern'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import './styles.css'
import { div } from 'framer-motion/client'

export function GridPatternLinearGradient(props) {
  const { children } = props
  return (
    <div {...props}>
      <GridPattern
        width={20}
        height={20}
        x={1}
        y={1}
        className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ')}
      />
      {children}
    </div>
  )
}

const FadeTextHero = (props) => {
  const baseProps = {
    className:
      'text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance text-left font-semibold tracking-tighter md:text-center text-5xl sm:text-7xl md:text-7xl lg:text-7xl',
    direction: 'up',
    framerProps: {
      show: { transition: { delay: 0.2, duration: 20 } }
    }
  }
  return <FadeText {...baseProps} {...props}></FadeText>
}

const Hero = () => {
  // const showcase = useRef(null);
  // useGSAP(()=>{
  //   gsap.set(showcase.current, { opacity: 0 });

  //   gsap.to(showcase.current, {
  //     opacity: 0.35,
  //     duration: 4
  //   });
  // });

  return (
    <div className='relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8'>
      {/* <div
        id='showcase'
        class='showcase__glow absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-violet-500 mix-blend-screen blur-[120px] filter'
        ref={showcase}
      ></div> */}
      <div className='md:pt-64'>
        <FadeTextHero
          framerProps={{
            show: { transition: { delay: 0.2, duration: 1 } }
          }}
          text='Introducing'
        ></FadeTextHero>

        <FadeTextHero
          framerProps={{
            show: { transition: { delay: 1.2, duration: 1.2 } }
          }}
          className='text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-balance
          text-left tracking-tighter md:text-center text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-bold'
          text='Testing Hero'
        ></FadeTextHero>
      </div>
    </div>
  )
}

// const HomePage = () => {
//   return (
//     <Container>
//       <Hero />
//     </Container>
//   )
// }

// dynamic import scene
import React, { Suspense } from 'react'

const Scene = React.lazy(() => import('./components/Scene'))

const HomePage = () => {
  return (
    <div className='h-screen relative bg-background'>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  )
}

export default HomePage
