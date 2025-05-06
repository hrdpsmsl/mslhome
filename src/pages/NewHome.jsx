import {
  Container,
  Heading,
  HStack,
  Image,
  Separator,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import {
  RiArrowRightBoxLine,
  RiArrowRightUpLine,
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiPlayLine,
} from '@remixicon/react';
import React from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MarqueeComponent from '../layout/secondFold/MarqueeComponent';

const NewHome = () => {
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    const horzaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#msl_logo_home',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 70%  ',
        end: 'top 70%',
        scrub: 3, // Smooth scrolling effect
        pin: true, // Pin the trigger element
      },
    });

    horzaTimeline
      .to('#msl_logo_home', {
        scale: 1.7,
        filter: 'grayscale(0%) drop-shadow(2px 2px 2px #bfbfbf)',
      })
      .to('#msl_logo_home_seperator', {
        margin: '24px 0px',
      });
  });
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = 'visible';

      const h1Element = containerRef.current.querySelector('h1');
      if (!h1Element) return;

      const { words } = splitText(h1Element);

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);
  return (
    <VStack w={'100vw'}>
      <VStack w={'360px'} bg={'lightgrey'} minH={'100vh'} pt={'64px'} gap={0}>
        <VStack
          bg={'white'}
          px={5}
          w={'100%'}
          h={'55vh'}
          display={'flex'}
          justifyContent={'center'}>
          <VStack
            mt={'-32px'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            w={'100%'}>
            <RiDoubleQuotesL color='black' size={36} />
          </VStack>
          <VStack w={'100%'} className='container' ref={containerRef}>
            <Heading
              color={'blackAlpha.800'}
              className='gothic h1'
              fontSize={28}
              lineHeight={'1.2'}
              textTransform={'uppercase'}
              fontWeight={'900'}>
              The solution often turns out more beautiful than the puzzle.
            </Heading>
          </VStack>
          <HStack
            gap={0}
            w={'100%'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}>
            <Heading
              color={'black'}
              className='comfortaa'
              fontSize={16}
              fontStyle={'italic'}>
              Richard Dawkins
            </Heading>
            <Spacer />
            <RiDoubleQuotesR color='black' size={36} />
          </HStack>
        </VStack>
        <VStack
          w={'100%'}
          h={'50vh'}
          gap={0}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}>
          <video autoPlay loop muted playsInline id='bg_video'>
            <source src='./assets/bg_vid.mp4' type='video/mp4' />
          </video>
          <VStack
            h={'50vh'}
            gap={0}
            pos={'absolute'}
            bgColor={'blackAlpha.700'}
            w={'100%'}>
            <HStack h={'100%'} gap={0} cursor={'pointer'}>
              <RiPlayLine color={'#ff8c5f'} size={36} />
              <Heading
                fontSize={24}
                color={'white'}
                className='gothic'
                mixBlendMode={'difference'}>
                Play Reel
              </Heading>
            </HStack>
          </VStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'64px'} px={5}>
          <Image
            py={5}
            src='./assets/msl-25-logo-black.png'
            id='msl_logo_home'
            w={'50%'}
            filter={'grayscale(100%)'}
          />
          <Separator
            w={'100%'}
            id='msl_logo_home_seperator'
            margin='12px 0px'
            borderColor={'blackAlpha.300'}
          />
          <Heading
            className='comfortaa'
            color={'black'}
            fontWeight={'bolder'}
            fontSize={24}
            lineHeight={'1.2'}>
            A strategic communication partner. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Heading>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'32px'} px={5}>
          <HStack pb={5} gap={0}>
            <Heading
              className='gothic'
              fontSize={30}
              cursor={'pointer'}
              color={'blackAlpha.800'}
              lineHeight={'1.5'}
              fontWeight={'900'}
              textDecor={'underline'}
              textDecorationThickness={1.5}
              textUnderlineOffset={7}>
              Are you looking to...
            </Heading>
            <Image src='./assets/knock_knock.gif' w={'35%'} />
          </HStack>
          <Separator w={'100%'} mb={5} borderColor={'blackAlpha.300'} />
          <HStack
            w={'100%'}
            py={5}
            display={'flex'}
            alignItems={'flex-start'}
            px={5}>
            <Heading
              fontSize={24}
              w={'10%'}
              className='gothic'
              color={'blackAlpha.800'}>
              1
            </Heading>
            <Heading
              fontSize={24}
              w={'90%'}
              className='comfortaa'
              fontWeight={'bolder'}
              textTransform={'capitalize'}
              color={'blackAlpha.800'}>
              build corporate reputation ?
            </Heading>
          </HStack>
          <Separator w={'100%'} borderColor={'blackAlpha.300'} />
          <HStack
            w={'100%'}
            py={5}
            display={'flex'}
            alignItems={'flex-start'}
            px={5}>
            <Heading
              fontSize={24}
              w={'10%'}
              className='gothic'
              color={'blackAlpha.800'}>
              2
            </Heading>
            <Heading
              color={'blackAlpha.800'}
              fontSize={24}
              w={'90%'}
              className='comfortaa'
              fontWeight={'bolder'}>
              Localize your global communications strategy ?
            </Heading>
          </HStack>
          <Separator w={'100%'} borderColor={'blackAlpha.300'} />
          <HStack
            w={'100%'}
            py={5}
            display={'flex'}
            alignItems={'flex-start'}
            px={5}>
            <Heading
              fontSize={24}
              w={'10%'}
              className='gothic'
              color={'blackAlpha.800'}>
              3
            </Heading>
            <Heading
              color={'blackAlpha.800'}
              fontSize={24}
              w={'90%'}
              className='comfortaa'
              fontWeight={'bolder'}>
              Rebuild trust post-crisis?
            </Heading>
          </HStack>
          <Separator w={'100%'} borderColor={'blackAlpha.300'} />
          <HStack
            w={'100%'}
            py={5}
            display={'flex'}
            alignItems={'flex-start'}
            px={5}>
            <Heading
              fontSize={24}
              w={'10%'}
              className='gothic'
              color={'blackAlpha.800'}>
              4
            </Heading>
            <Heading
              color={'blackAlpha.800'}
              fontSize={24}
              w={'90%'}
              className='comfortaa'
              fontWeight={'bolder'}>
              Understand what people think about you amplify executive
              visibility?
            </Heading>
          </HStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'32px'}>
          <HStack w={'100%'} px={5}>
            <Heading
              pb={5}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={30}
              lineHeight={'1.3'}>
              Innovation <br />
              in Motion
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} py={5}>
            <Heading
              pb={5}
              w={'100%'}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={30}
              lineHeight={'1.3'}
              px={5}>
              one
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'900'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={24}
              lineHeight={1.3}>
              Making a loud statement with #SushTheHush
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'400'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={20}
              pb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Heading>
            <Container
              px={5}
              bg={'url(./assets/sushthehush.jpg)'}
              w={'100%'}
              h={'400px'}
              aspectRatio={'1/1'}
              backgroundSize={'cover'}
              backgroundPosition={'center'}
              display={'flex'}
              alignItems={'flex-end'}>
              <HStack w={'100%'} display={'flex'} alignItems={'center'} pb={5}>
                <Heading
                  textAlign={'start'}
                  color={'white'}
                  className='gothic'
                  fontWeight={'400'}
                  fontSize={16}
                  lineHeight={'1.3'}>
                  Digital Brand
                  <br />
                  /Rebrand
                </Heading>
                <Spacer />
                <RiArrowRightUpLine color='white' size={30} />
              </HStack>
            </Container>
          </VStack>
          <VStack w={'100%'} py={5}>
            <Heading
              pb={5}
              w={'100%'}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={30}
              lineHeight={'1.3'}
              px={5}>
              two
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'900'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={24}
              lineHeight={1.3}>
              #TheGreenDot that turns possibilities to progress
            </Heading>
            <Heading
              color={'black'}
              className='comfortaa'
              fontWeight={'400'}
              textAlign={'start'}
              w={'100%'}
              px={5}
              fontSize={20}
              pb={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Heading>
            <Container
              px={5}
              bg={'url(./assets/greendot.png)'}
              w={'100%'}
              h={'400px'}
              aspectRatio={'1/1'}
              backgroundSize={'cover'}
              backgroundPosition={'center'}
              display={'flex'}
              alignItems={'flex-end'}>
              <HStack w={'100%'} display={'flex'} alignItems={'center'} pb={5}>
                <Heading
                  textAlign={'start'}
                  color={'black'}
                  className='gothic'
                  fontWeight={'400'}
                  fontSize={16}
                  lineHeight={'1.3'}>
                  Social Media
                  <br />
                  /Digital
                </Heading>
                <Spacer />
                <RiArrowRightUpLine color='black' size={30} />
              </HStack>
            </Container>
          </VStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'32px'}>
          <HStack w={'100%'} px={5}>
            <Heading
              pb={5}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              w={'70%'}
              lineHeight={'1.3'}>
              Integrated Communication
              <br />
              Partner
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} py={5}>
            <HStack gap={5} px={5}>
              <Container
                border={'1px solid #dbdbdb'}
                borderRadius={10}
                py={2}
                shadow={'xs'}>
                <Image src='./assets/msl-logo-gray.png' />
              </Container>
              <Container
                shadow={'xs'}
                border={'1px solid #dbdbdb'}
                borderRadius={10}
                py={2}>
                <Image src='./assets/pca-logo-white.png' />
              </Container>
            </HStack>
            <HStack gap={5} px={5} py={3} pb={5}>
              <Container
                shadow={'xs'}
                border={'1px solid #dbdbdb'}
                borderRadius={10}
                py={2}>
                <Image src='./assets/2020-msl-logo-white.png' />
              </Container>
              <Container
                shadow={'xs'}
                border={'1px solid #dbdbdb'}
                borderRadius={10}
                py={2}>
                <Image src='./assets/organics.png' />
              </Container>
            </HStack>
          </VStack>
        </VStack>
        <VStack w={'100%'} bgColor={'white'} py={'16px'}>
          <HStack w={'100%'} px={5}>
            <Heading
              pb={5}
              textAlign={'start'}
              color={'blackAlpha.800'}
              className='gothic'
              fontWeight={'900'}
              fontSize={24}
              w={'70%'}
              lineHeight={'1.3'}>
              Partnering with
            </Heading>
            <Spacer />
            <RiArrowRightUpLine color='black' size={30} />
          </HStack>
          <Separator
            style={{ width: 'calc(100% - 40px)' }}
            borderColor={'blackAlpha.300'}
          />
          <VStack w={'100%'} py={5} overflow={'hidden'}>
            <MarqueeComponent />
          </VStack>
        </VStack>
        <Separator w={'100%'} borderColor={'blackAlpha.300'} />
      </VStack>
    </VStack>
  );
};

export default NewHome;

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
