import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardStack = () => {
  const cardsRef = useRef([]);
  const stackHeight = window.innerHeight * 0.25;

  useEffect(() => {
    let cards = cardsRef.current;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card.querySelector('img'),
        {
          scale: 1,
          transformOrigin: 'center top',
          filter: 'blur(0px)',
        },
        {
          y: gsap.utils.mapRange(
            1,
            cards.length,
            -20,
            -stackHeight + 20,
            cards.length - i
          ),
          scale: gsap.utils.mapRange(1, cards.length, 0.4, 0.9, i),
          filter: `blur(${gsap.utils.mapRange(
            1,
            cards.length,
            4,
            25,
            cards.length - i
          )}px)`,
          scrollTrigger: {
            trigger: card,
            markers: true,
            scrub: true,
            start: `top ${stackHeight}`,
            end: `+=${window.innerHeight * 2}`,
            invalidateOnRefresh: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: card,
        pin: true,
        start: `top ${stackHeight}`,
        endTrigger: '.following-content',
        end: `top ${stackHeight + 100}`,
        pinSpacing: false,
      });
    });
  }, [stackHeight]);

  return (
    <div className='card-stack'>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className='card'
          ref={(el) => (cardsRef.current[index] = el)}>
          <img src='https://via.placeholder.com/300' alt='Card' />
        </div>
      ))}
      <div className='following-content'>More content here...</div>
    </div>
  );
};

export default CardStack;
