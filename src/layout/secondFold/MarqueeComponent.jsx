import React, { useEffect, useState } from 'react';
import './Marquee.css'; // Import the CSS file
import { Container } from '@chakra-ui/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const imageLinks = [
  'https://res.cloudinary.com/dsphyolrg/images/v1734333173/salesforce-1/salesforce-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333176/gradsingapore-1/gradsingapore-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333183/panasonic-logo-black-and-white-1-1/panasonic-logo-black-and-white-1-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333187/paytm-1/paytm-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333191/Mahindra-Lifespaces-1/Mahindra-Lifespaces-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333315/California-Almonds-1/California-Almonds-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333325/RitesLogo-1/RitesLogo-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333320/mastercard-logo-4-1/mastercard-logo-4-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333335/dell-1_24145dc2f/dell-1_24145dc2f.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333169/apollo-1/apollo-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333173/salesforce-1/salesforce-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333176/gradsingapore-1/gradsingapore-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333183/panasonic-logo-black-and-white-1-1/panasonic-logo-black-and-white-1-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333187/paytm-1/paytm-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333191/Mahindra-Lifespaces-1/Mahindra-Lifespaces-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333315/California-Almonds-1/California-Almonds-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333325/RitesLogo-1/RitesLogo-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333320/mastercard-logo-4-1/mastercard-logo-4-1.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333335/dell-1_24145dc2f/dell-1_24145dc2f.png',
  'https://res.cloudinary.com/dsphyolrg/images/v1734333169/apollo-1/apollo-1.png',
];

const MarqueeComponent = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, useGSAP);
  const animation = () => {
    console.clear();

    gsap.registerPlugin(ScrollTrigger);

    const scrollingText = gsap.utils.toArray('.rail h4');

    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    let speedTween;

    ScrollTrigger.create({
      trigger: '.scrolling-text',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        speedTween && speedTween.kill();
        speedTween = gsap
          .timeline()
          .to(tl, {
            timeScale: 3 * self.direction,
            duration: 0.25,
          })
          .to(
            tl,
            {
              timeScale: 1 * self.direction,
              duration: 1.5,
            },
            '+=0.5'
          );
      },
    });

    /*
Observer.create({
  onChangeY(self) {
    let factor = 2.5;
    if (self.deltaY < 0) {
      factor *= -1;
    } 
    gsap.timeline({
      defaults: {
        ease: "none",
      }
    })
      .to(tl, { timeScale: factor * 2.5, duration: 0.2 })
      .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
  }
});
*/

    /*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: 'none' },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 0.5) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
              gsap.getProperty(el, 'xPercent')
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add('label' + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  };
  const [clientLogos, setClientLogos] = useState([]);
  const getClientele = async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiToken = import.meta.env.VITE_API_TOKEN;
    const response = await fetch(`${apiUrl}/clientele?_embed`, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const cimagesarray = [];
    data.map((value) => {
      cimagesarray.push(value._embedded['wp:featuredmedia'][0].link);
    });
    setClientLogos(cimagesarray);
  };
  const getLocalClient = () => {
    let cimagesarray = [];
    for (let i = 0; i < 40; i++) {
      cimagesarray.push('./assets/logo.png');
    }
    cimagesarray.push('./assets/logo_blank.png');
    setClientLogos(cimagesarray);
  };

  useEffect(() => {
    // getClientele();
    getLocalClient();
    setTimeout(() => {
      animation();
    }, 4000);
  }, []);
  return (
    <div className='scrolling-text'>
      <div className='rail'>
        {imageLinks.map((item, key) => {
          return (
            <h4 key={key} className='scroll_h4'>
              <img src={item} data-src={item} className='scroll_img' />
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeComponent;
