import React, { useEffect, useState } from 'react';
import HeaderOverlay from './HeaderOverlay';
import { Grid, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { RiMenuLine } from '@remixicon/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, useGSAP);
  const menuTimeline = gsap.timeline({ paused: true });
  const gsapAnimation = (typee) => {
    if (typee) {
      menuTimeline.play();
    } else {
      menuTimeline.reverse();
      setTimeout(() => {
        menuTimeline.seek(0);
      }, 500);
    }
  };
  const [winWidth, setWinWidth] = useState(true);
  const [schWidth, setSchWidth] = useState(true);
  const setWidth = () => {
    const iwidth = window.innerWidth;
    if (iwidth < 992) {
      setWinWidth(false);
    } else {
      setWinWidth(true);
    }
    if (iwidth < 768) {
      setSchWidth(false);
    } else {
      setSchWidth(true);
    }
  };
  useEffect(() => {
    menuTimeline.to(
      '#nav_menu',
      {
        display: 'none',
        marginTop: '-64px',
        duration: 0.5,
        ease: 'power3.out',
      },
      0
    );
    menuTimeline.to(
      '#menu_overlay',
      {
        display: 'flex',
        top: '0vh',
        duration: 0.5,
        ease: 'power3.out',
      },
      0
    );
    menuTimeline.to(
      'body',
      {
        overflowY: 'hidden',
      },
      0
    );

    setWidth();
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, [menuTimeline]);
  return (
    <>
      <HeaderOverlay gsapFun={gsapAnimation} />
      <HStack
        color={'white'}
        zIndex={999}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        w={'100vw'}
        h={('56px', '56px', '56px', '56px', '64px', '64px')}
        borderBottom={'0.1px solid #808080b0'}
        backdropFilter={'blur(10px)'}
        position={'fixed'}
        top={0}
        left={0}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'c'}
        id='nav_menu'
        bgColor={'blackAlpha.400'}>
        <Image
          cursor={'pointer'}
          src='./assets/msl-25-logo.png'
          h={'35px'}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth', duration: 0.2 });
            setTimeout(() => {
              navigate('/');
            }, 200); // wait for smooth scroll (adjust timing if needed)
          }}
        />
        <Spacer />
        {winWidth ? (
          <HStack gap={4} className='inter' fontWeight={'200'} h={'64px'}>
            <Text
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth', duration: 1 });
                setTimeout(() => {
                  navigate('/work');
                }, 500); // wait for smooth scroll (adjust timing if needed)
              }}
              fontSize={['18px']}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              cursor={'pointer'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              WORK
            </Text>
            <Text
              fontSize={['18px']}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              cursor={'pointer'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              SERVICES
            </Text>
          </HStack>
        ) : (
          <></>
        )}
        <VStack w={'50px'} id='menu_div'>
          <Image
            onClick={() => {
              console.log('clicked');
              gsapAnimation(true);
            }}
            id='menu_ico'
            cursor={'pointer'}
            src='./assets/dots.png'
            h={'15px'}
            transition={'0.1s'}
          />
        </VStack>
        {schWidth ? (
          <VStack className='inter' fontWeight={'200'}>
            <Text
              fontSize={['18px']}
              cursor={'pointer'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'63px'}
              _hover={{
                borderBottom: '1px solid white',
                transition: '0.5s',
              }}
              transition={'0.2s'}>
              Schedule a Call
            </Text>
          </VStack>
        ) : (
          <></>
        )}
      </HStack>
    </>
  );
};

export default Header;
