import {
  Container,
  Heading,
  HStack,
  Image,
  Separator,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiCloseLargeLine, RiCloseLine } from '@remixicon/react';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useNavigate } from 'react-router-dom';

const HeaderOverlay = ({ gsapFun }) => {
  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, useGSAP);
  const [scrWidth, setScrWidth] = useState('0');
  const screenWidth = () => {
    const iwidth = window.innerWidth;

    if (iwidth <= 768) {
      setScrWidth('0');
    } else if (iwidth < 992) {
      setScrWidth('1');
    } else {
      setScrWidth('2');
    }
  };

  useEffect(() => {
    screenWidth();
    window.addEventListener('resize', screenWidth);
    return () => {
      window.removeEventListener('resize', screenWidth);
    };
  }, []);
  return (
    <div id='menu_overlay'>
      {scrWidth == '0' ? (
        <VStack
          w={'100vw'}
          h={'100vh'}
          borderBottom={'1px solid gray'}
          backgroundImage={[
            'linear-gradient(to right,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(./assets/overlay_bg.jpg)',
          ]}
          bgSize={'cover'}
          bgPos={'left'}
          px={['32px', '32px', '48px', '48px', '64px', '64px']}
          py={['32px', '32px', '48px', '48px', '64px', '64px']}>
          <HStack
            w={'100%'}
            h={('56px', '56px', '56px', '56px', '64px', '64px')}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}>
            <Image src='./assets/msl-logo-white.png' h={'35px'} />
            <Spacer />
            <Text
              color={'white'}
              border={'1px solid'}
              borderImage={'linear-gradient(to right, #05aae0, #e77a2d) 1'}
              transition={'0.8s'}
              _hover={{
                borderImage: 'linear-gradient(to top, #05aae0, #e77a2d) 1',
                transition: '0.8s',
              }}
              p={4}
              cursor={'pointer'}
              onClick={() => {
                gsapFun(false);
              }}>
              <RiCloseLargeLine
                color='white'
                size={'30px'}
                _hover={{ size: '32px' }}
              />
            </Text>
          </HStack>
          <VStack
            h={'100%'}
            w={'100%'}
            className='inter'
            fontWeight={'400'}
            fontSize={['28px', '40px', '30px', '40px', '50px', '70px']}
            color={'gray'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            gap={'2vh'}
            px={['32px', '32px', '48px', '48px', '64px', '64px']}
            py={['32px', '32px', '48px', '48px', '64px', '64px']}>
            <Text color={'white'}>Home</Text>
            <Text>Work</Text>
            <Text>Services</Text>
            <Text>Entities</Text>
            <Text>Network</Text>
            <Text>Schedule a call</Text>
            <Text fontSize={'13px'} cursor={'pointer'}>
              ENQUIRY@MAIL.COM
            </Text>
          </VStack>
        </VStack>
      ) : (
        <></>
      )}
      {scrWidth == '1' ? (
        <HStack
          h={'100vh'}
          w={'100vw'}
          gap={0}
          borderBottom={'1px solid gray'}
          backgroundImage={[
            'linear-gradient(to right,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(./assets/overlay_bg.jpg)',
          ]}
          bgSize={'cover'}
          bgPos={'left'}>
          <VStack
            w={'60%'}
            h={'100vh'}
            px={['32px', '32px', '48px', '48px', '64px', '64px']}
            py={['32px', '32px', '48px', '48px', '64px', '64px']}>
            <Container
              h={('56px', '56px', '56px', '56px', '64px', '64px')}
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}>
              <Image src='./assets/msl-logo-white.png' h={'35px'} />
            </Container>
            <VStack
              h={'100%'}
              w={'100%'}
              className='inter'
              fontWeight={'400'}
              fontSize={['50px', '30px', '30px', '40px', '50px', '70px']}
              color={'gray'}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'center'}
              gap={'2vh'}
              px={['32px', '32px', '48px', '48px', '64px', '64px']}
              py={['32px', '32px', '48px', '48px', '64px', '64px']}>
              <Text color={'white'}>Home</Text>
              <Text>Work</Text>
              <Text>Services</Text>
              <Text>Entities</Text>
              <Text>Network</Text>
              <Text>Schedule a call</Text>
            </VStack>
          </VStack>
          <VStack
            px={['32px', '32px', '48px', '48px', '64px', '64px']}
            py={['32px', '32px', '48px', '48px', '64px', '64px']}
            w={'40%'}
            h={'100%'}
            bgColor={''}
            display={'flex'}
            alignItems={'flex-end'}
            justifyContent={'flex-start'}>
            <VStack>
              <Text
                color={'white'}
                border={'1px solid'}
                borderImage={'linear-gradient(to right, #05aae0, #e77a2d) 1'}
                transition={'0.8s'}
                _hover={{
                  borderImage: 'linear-gradient(to top, #05aae0, #e77a2d) 1',
                  transition: '0.8s',
                }}
                p={4}
                cursor={'pointer'}
                onClick={() => {
                  gsapFun(false);
                }}>
                <RiCloseLargeLine
                  color={'white'}
                  size={'30px'}
                  _hover={{ size: '32px' }}
                />
              </Text>
            </VStack>
            <Spacer />
            <VStack
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'center'}
              color={'white'}
              fontWeight={'200'}>
              <Heading fontSize={['20px']}>Services</Heading>
              <Separator w={'100%'} />
              <Text cursor={'pointer'}>Strategy & Insights</Text>
              <Text cursor={'pointer'}>Digital & Social Media</Text>
              <Text cursor={'pointer'}>Media & Crisis</Text>
              <Text cursor={'pointer'}>Policy & Regulation</Text>
              <Text cursor={'pointer'}> Content & Video</Text>
              <br />
              <Heading fontSize={['20px']}>Entities</Heading>
              <Separator w={'100%'} />
              <Text cursor={'pointer'}>MSL</Text>
              <Text cursor={'pointer'}>Organic by MSL</Text>
              <Text cursor={'pointer'}>PCA</Text>
              <Text cursor={'pointer'}>20:20 MSL</Text>
              <br />
              <Text fontSize={'13px'} cursor={'pointer'}>
                ENQUIRY@MAIL.COM
              </Text>
            </VStack>
          </VStack>
        </HStack>
      ) : (
        <></>
      )}
      {scrWidth == '2' ? (
        <HStack h={'100vh'} w={'100vw'} gap={0}>
          <VStack
            w={'25%'}
            h={'100%'}
            bg={'url(./assets/overlay_bg.jpg)'}
            bgSize={'cover'}
            bgPos={'left'}>
            <Container
              h={('56px', '56px', '56px', '56px', '64px', '64px')}
              px={['32px', '32px', '48px', '48px', '64px', '64px']}
              py={['32px', '32px', '48px', '48px', '64px', '64px']}
              display={'flex'}
              justifyContent={'flex-start'}
              alignItems={'center'}>
              <Image src='./assets/msl-logo-white.png' h={'35px'} />
            </Container>
          </VStack>
          <VStack
            w={'45%'}
            h={'100vh'}
            bgColor={'blackAlpha.900'}
            className='inter'
            fontWeight={'400'}
            fontSize={['50px', '50px', '40px', '40px', '50px', '70px']}
            color={'gray'}
            display={'flex'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            gap={'2vh'}
            px={['32px', '32px', '48px', '48px', '64px', '64px']}>
            <Text _hover={{ color: 'white' }} cursor={'pointer'}>
              Home
            </Text>
            <Text
              onClick={() => {
                gsapFun(false);
                setTime;
              }}
              _hover={{ color: 'white' }}
              cursor={'pointer'}>
              Work
            </Text>
            <Text _hover={{ color: 'white' }} cursor={'pointer'}>
              Services
            </Text>
            <Text _hover={{ color: 'white' }} cursor={'pointer'}>
              Entities
            </Text>
            <Text _hover={{ color: 'white' }} cursor={'pointer'}>
              Network
            </Text>
            <Text _hover={{ color: 'white' }} cursor={'pointer'}>
              Schedule a call
            </Text>
          </VStack>
          <VStack
            px={['32px', '32px', '48px', '48px', '64px', '64px']}
            py={['32px', '32px', '48px', '48px', '64px', '64px']}
            w={'30%'}
            h={'100%'}
            bgColor={'blackAlpha.900'}
            display={'flex'}
            alignItems={'flex-end'}
            justifyContent={'flex-start'}>
            <VStack>
              <Text
                border={'1px solid'}
                color={'white'}
                borderImage={'linear-gradient(to right, #05aae0, #e77a2d) 1'}
                transition={'0.8s'}
                _hover={{
                  borderImage: 'linear-gradient(to top, #05aae0, #e77a2d) 1',
                  transition: '0.8s',
                }}
                p={4}
                cursor={'pointer'}
                onClick={() => {
                  gsapFun(false);
                }}>
                <RiCloseLargeLine
                  color={'white'}
                  size={'30px'}
                  _hover={{ size: '32px' }}
                />
              </Text>
            </VStack>
            <Spacer />
            <VStack
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'center'}
              color={'whiteAlpha.800'}
              fontWeight={'200'}>
              <Heading fontSize={['20px']}>Services</Heading>
              <Separator w={'100%'} />
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Strategy & Insights
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Digital & Social Media
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Media & Crisis
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Policy & Regulation
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Content & Video
              </Text>
              <br />
              <Heading fontSize={['20px']}>Entities</Heading>
              <Separator w={'100%'} />
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                MSL
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                Organic by MSL
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                PCA
              </Text>
              <Text _hover={{ color: 'white' }} cursor={'pointer'}>
                20:20 MSL
              </Text>
              <br />
              <Text
                _hover={{ color: 'white', fontWeight: 300 }}
                fontSize={'13px'}
                cursor={'pointer'}>
                ENQUIRY@MAIL.COM
              </Text>
            </VStack>
          </VStack>
        </HStack>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderOverlay;
