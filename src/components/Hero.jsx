import { Container, Heading, HStack, Spacer, VStack } from '@chakra-ui/react';
import { RiPlayCircleFill } from '@remixicon/react';
import React from 'react';

const Hero = () => {
  return (
    <VStack
      h={'100vh'}
      bgColor={'transparent'}
      position={'relative'}
      id='hero_banner'
      w={'100%'}
      overflow={'hidden'}
      zIndex={2}
      py={'64px'}>
      <video autoPlay loop muted playsInline id='bg_video'>
        <source src='./assets/bg_vid.mp4' type='video/mp4' />
      </video>
      <HStack
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        className='inter'
        h={'50%'}
        display={'flex'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'flex-end'}>
        <Heading
          zIndex={999}
          fontSize={['25px', '35px', '55px', '60px', '70px', '120px']}
          lineHeight={['25px', '35px', '55px', '60px', '70px', '120px']}
          blendMode={'difference'}
          color={'white'}
          filter={'brightness(100%)'}
          textTransform={'uppercase'}>
          Powering Influence,
          <br />
          One Story at
          <br />a Time
        </Heading>
      </HStack>
      <Spacer />
      <HStack
        zIndex={2}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        h={'auto'}
        display={'flex'}
        w={'100%'}
        justifyContent={'flex-start'}
        alignItems={'center'}>
        <Heading
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          borderRadius={'10px'}
          h={['135px', '135px', '135px', '135px', '180px', '180px']}
          w={['240px', '240px', '240px', '240px', '320px', '320px']}
          aspectRatio={'16/9'}
          border={'0.1px solid #808080b0'}
          backdropFilter={'blur(10px)'}
          bgColor={'whiteAlpha.200'}>
          <RiPlayCircleFill size={44} color='#d4e4ff' />
        </Heading>
      </HStack>
      <HStack
        mixBlendMode={'difference'}
        filter={'brightness(155%)'}
        zIndex={2}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        h={'10%'}
        display={'flex'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={'-4%'}>
        <Heading
          px={['32px', '32px', '48px', '48px', '64px', '64px']}
          zIndex={999}
          fontSize={'sm'}
          display={'flex'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          border={'0.1px solid #c4c4c4'}
          className='inter'
          fontWeight={'100'}
          color={'#c4c4c4'}>
          CULTURE | CONVERSATION | CONNECTION
        </Heading>
      </HStack>
    </VStack>
  );
};

export default Hero;
