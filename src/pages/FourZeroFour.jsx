import { Button, Heading, Spacer, VStack } from '@chakra-ui/react';
import gsap from 'gsap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FourZeroFour = () => {
  const navigate = useNavigate();
  return (
    <VStack
      zIndex={9}
      h={'100vh'}
      bgColor={'transparent'}
      w={'100vw'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Heading
        className='inter'
        color={'white'}
        fontSize={['95px', '115px', '155px', '160px', '170px', '200px']}
        lineHeight={['95px', '115px', '155px', '160px', '170px', '200px']}
        textShadow={
          '0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;'
        }>
        OOPS
      </Heading>
      <Heading
        color={'red.400'}
        className='inter'
        fontSize={['25px', '40px', '55px', '60px', '70px', '100px']}
        lineHeight={['25px', '40px', '55px', '60px', '70px', '100px']}
        textShadow={
          '0 1px rgb(90, 90, 90), -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;'
        }>
        404 | Page not Found!
      </Heading>

      <Button
        className='btn_screen'
        onClick={() => {
          gsap.to(
            '.btn_screen',
            {
              color: 'transparent',
              pointerEvents: 'none',
              duration: 1,
              zIndex: 999,
            },
            0
          );
          gsap.to(
            '.btn_screen',
            {
              scale: 500,
              duration: 0.9,
            },
            1
          );
          setTimeout(() => {
            window.scrollTo(0, 0);
            navigate('/');
          }, 1000);
        }}
        mt={'100px'}
        color={'black'}
        bgColor={'white'}
        variant={'solid'}
        _hover={{ color: 'black' }}>
        Back to Home!
      </Button>
    </VStack>
  );
};

export default FourZeroFour;
