import {
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Separator,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services_info = [
  {
    title: 'Strategy & Insights',
    desc: 'At MSL India, we turn insights into influence. Our expert team, powered by advanced research tools and data platforms, dives deep into consumer and industry trends to uncover the key insights that shape impactful strategies for our clients.',
  },
  {
    title: 'Digital & Social Media',
    desc: 'We craft digital experiences that resonate. From strategy and storytelling to media planning and execution, we blend creativity with tech—bringing together art, code, and copy to create campaigns that engage, connect, and inspire action.',
  },
  {
    title: 'Media & Crisis',
    desc: 'When it comes to media relations, our seasoned professionals help you seize opportunities and shape a strong, consistent narrative. In times of crisis, our strategic approach ensures you’re prepared to protect your reputation and navigate challenges with confidence.',
  },
  {
    title: 'Policy & Regulation',
    desc: 'No two public affairs challenges are the same. Our custom solutions are built on thorough research and analysis, designed to meet the specific needs of your business while navigating the complexities of policy and regulatory environments.',
  },
  {
    title: 'Content & Video',
    desc: 'Our in-house production studio combines editorial flair, artistic vision, and cutting-edge technology to produce powerful multimedia content. From videos to graphics, we deliver stories that captivate audiences across every platform and channel.',
  },
];
let count = 0;
const Services = () => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    const horzaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#paralex_cont',
        scroller: 'body',
        markers: true, // Debug markers
        start: 'top 0px  ',
        end: 'top -100%',
        scrub: 3, // Smooth scrolling effect
        pin: true, // Pin the trigger element
      },
    });
    horzaTimeline
      .to(
        '#paralex_text',
        {
          transform: 'translateX(-150vw)',
        },
        0
      )
      .to(
        '#paralex_cont',
        {
          backgroundPosition: 'bottom right',
        },
        0
      );
  });

  return (
    <Stack gap={0}>
      <Hero />
      <VStack
        py={32}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        minH={'100vh'}
        w={'100vw'}
        gap={0}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        id='service_header'>
        <Heading
          w={'100%'}
          fontSize={['35px', '50px', '70px', '80px', '90px', '110px']}
          className='inter'
          mb={32}>
          What We Provide
        </Heading>

        <Grid
          w={'100%'}
          h={'auto'}
          gap={[0, 0, 0, 8, 8, 8]}
          templateColumns={['1fr', '1fr', '1fr 1fr', '2fr 3fr']}>
          {services_info.slice(0, 2).map((item, key) => {
            return (
              <GridItem key={key}>
                <Container
                  py={16}
                  w={'100%'}
                  minH={['250px', '300px', '200px', '200px', '400px', '400px']}
                  bgColor={'blackAlpha.400'}
                  borderRadius={12}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'flex-start'}
                  transition={'0.5s'}
                  _hover={{
                    boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
                    zIndex: '10',
                  }}>
                  <Heading
                    color={'white'}
                    fontWeight={'900'}
                    fontSize={['24px', '30px', '30px', '32px', '32px', '32px']}
                    lineHeight={[
                      '25px',
                      '35px',
                      '35px',
                      '38px',
                      '38px',
                      '38px',
                    ]}
                    className='inter'>
                    {item.title}
                  </Heading>
                  <Separator w={'100%'} my={8} />
                  <Text fontSize={[16, 16, 16, 18, 18, 20]} lineHeight={'auto'}>
                    {item.desc}
                  </Text>
                </Container>
              </GridItem>
            );
          })}
        </Grid>
        <Grid
          mt={[0, 0, 0, 8, 8, 8]}
          gap={[0, 0, 0, 8, 8, 8]}
          w={'100%'}
          templateColumns={{
            base: '1fr',
            sm: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr',
            xl: '1fr 1fr 1fr', // Three columns in xl
          }}>
          {services_info.slice(2, 5).map((item, key) => {
            return (
              <GridItem
                key={key}
                colSpan={
                  key == 2 ? { xl: 1, lg: 2, md: 2, sm: 1, base: 1 } : ''
                }>
                <Container
                  py={16}
                  w={'100%'}
                  minH={['250px', '300px', '200px', '200px', '400px', '400px']}
                  bgColor={'blackAlpha.400'}
                  borderRadius={12}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'flex-start'}
                  transition={'0.5s'}
                  _hover={{
                    boxShadow: '0px 0px 10px 7px rgba(124, 176, 255, 0.5)',
                    zIndex: '10',
                  }}>
                  <Heading
                    color={'white'}
                    fontWeight={'900'}
                    fontSize={['24px', '30px', '30px', '32px', '32px', '32px']}
                    lineHeight={[
                      '25px',
                      '35px',
                      '35px',
                      '38px',
                      '38px',
                      '38px',
                    ]}
                    className='inter'>
                    {item.title}
                  </Heading>
                  <Separator w={'100%'} my={8} />
                  <Text fontSize={[16, 16, 16, 18, 18, 20]} lineHeight={'auto'}>
                    {item.desc}
                  </Text>
                </Container>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
      <VStack
        id='paralex_cont'
        w={'150vw'}
        h={'100vh'}
        bg={"url('./assets/img1.webp')"}
        bgSize={'cover'}
        overflow={'scroll'}
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'center'}>
        <Heading
          id='paralex_text'
          px={['32px', '32px', '48px', '48px', '64px', '64px']}
          fontSize={'20rem'}
          textWrap={'nowrap'}>
          EVERYTHING AT ONCE
        </Heading>
      </VStack>
    </Stack>
  );
};

export default Services;
