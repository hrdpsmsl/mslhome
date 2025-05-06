import {
  Avatar,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FifthFold = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    const horzaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#horza',
        scroller: 'body',
        markers: false, // Debug markers
        start: 'top 64px  ',
        end: 'top -100%',
        scrub: 3, // Smooth scrolling effect
        pin: true, // Pin the trigger element
      },
    });

    horzaTimeline.to('#horzaStack', {
      x: '-25vw', // Animate translateX with GSAP shorthand
      duration: 60,
    });
  });
  useEffect(() => {}, []);
  return (
    <VStack
      position={'flex'}
      id='horza'
      mt={16}
      gap={8}
      py={'64px'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      h={'calc(100vh - 64px)'}
      bgColor={'transparent'}
      overflow={'hidden'}>
      <Heading
        h={'auto'}
        w={'100%'}
        fontSize={['35px', '60px', '70px', '80px', '90px', '110px']}
        className='inter'>
        Client Stories
      </Heading>
      <HStack id='horzaStack' h={'100%'} w={'50vw'} zIndex={9}>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
            zIndex: '10',
          }}
          transition={'0.5s'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}>
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
            zIndex: '10',
          }}
          transition={'0.5s'}>
          {' '}
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
            zIndex: '10',
          }}
          transition={'0.5s'}>
          {' '}
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
            zIndex: '10',
          }}
          transition={'0.5s'}>
          {' '}
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
            zIndex: '10',
          }}
          transition={'0.5s'}>
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
        <Container
          bg={`url(./assets/test_bg.jpg)`}
          bgSize={'cover'}
          display={'flex'}
          alignItems={'flex-end'}
          px={4}
          justifyContent={'flex-start'}
          aspectRatio={'9/16'}
          h={'50vh'}
          backgroundColor={'gray.800'}
          borderRadius={'15px'}
          _hover={{
            h: '55vh',
            aspectRatio: '11/16',
            boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
          }}
          transition={'0.5s'}>
          <HStack py={4}>
            <Avatar.Root key={'outline'} variant={'outline'} bgColor={'black'}>
              <Avatar.Fallback name='Segun Adebayo' />
            </Avatar.Root>
            <VStack
              gap={0}
              justifyContent={'center'}
              display={'flex'}
              alignItems={'flex-start'}>
              <Text color='black' fontSize={10}>
                Segun Adebayo
              </Text>
              <Text color='black' fontSize={10}>
                XYZ Co. Ltd.
              </Text>
            </VStack>
          </HStack>
        </Container>
      </HStack>
    </VStack>
  );
};

export default FifthFold;
