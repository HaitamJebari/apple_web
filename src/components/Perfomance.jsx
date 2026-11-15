
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useMediaQuery } from 'react-responsive'
import {
  performanceImages,
  performanceImgPositions
} from '../constants/index.js'


const Perfomance = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})
  const sectionRef = useRef(null)

  useGSAP(() => {
    //Text animation: fade in and move up as it enters view
    gsap.fromTo(
      '.content p',
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.content',
          start: 'top bottom',
          end: 'top center',
          scrub: true //animated as we scroll
        }
      }
    )

    if(isMobile) return; // dont apply
    //Desktop-only

      const tl = gsap.timeline({
        defaults: {ease: "power1.inOut", duration: 2, overwrite: "auto"},
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          invalidateOnRefresh: true
        }
      })
      //Prepare images and animate to their final positions from constants at time 0

      performanceImgPositions.forEach(( pos ) => {
        if (pos.id === 'p5') return;

        const toVars = {};

        if(pos.left !== undefined) toVars.left = `${pos.left}%`;
        if(pos.right !== undefined) toVars.right = `${pos.right}%`;
        if(pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
        if(pos.transform !== undefined) toVars.transform = pos.transform;

        tl.to(`.${pos.id}`, toVars, 0);
        
      });


  }, { scope: sectionRef, dependencies: [isMobile]})

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game On</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img
            key={id}
            className={id}
            src={src}
            alt={id}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi, aut doloribus et at dolorum nulla enim eveniet
          similique possimus nisi excepturi eius perferendis
          quas rerum quia non voluptates voluptatem beatae?
        </p>
      </div>
    </section>
  )
}

export default Perfomance
