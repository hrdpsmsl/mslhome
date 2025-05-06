import {
  Heading,
  HStack,
  Separator,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiArrowRightUpLine } from '@remixicon/react';
import React, { useEffect } from 'react';

const servicesList = [
  'Strategy & Insights',
  'Digital & Social Media',
  'Media & Crisis',
  'Policy & Regulation',
  'Content & Video',
];

const ForthFold = () => {
  const mouseEffect = (state = 0) => {
    if (state === 1) {
    }
  };
  useEffect(() => {}, []);
  return (
    <VStack
      id='services_list'
      w={'100vw'}
      h={'auto'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      _hover={{ color: 'gray.700', transition: '0.9s' }}
      transition={'0.9s'}
      gap={0}>
      {servicesList.map((item, key) => {
        return (
          <VStack
            w={'100%'}
            key={key}
            cursor={'pointer'}
            _hover={{ color: '#d9d9ec' }}>
            <Separator w={'100%'} />
            <HStack
              w={'100%'}
              h={['70px', '120px', '150px']}
              zIndex={0}
              transition={'0.3s'}
              _hover={{
                boxShadow: ' inset 0px 0px 100px -40px rgba(255,255,255,0.4)',
                borderRadius: '16px',
                px: ['32px', '32px', '48px', '48px', '64px', '64px'],
              }}>
              <Heading
                fontWeight={'900'}
                fontSize={['20px', '30px', '30px', '32px', '32px', '32px']}
                lineHeight={['25px', '35px', '35px', '38px', '38px', '38px']}
                blendMode={'difference'}
                className='inter'>
                {item}
              </Heading>
              <Spacer />
              <Text blendMode={'difference'} className='inter'>
                <RiArrowRightUpLine />
              </Text>
            </HStack>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default ForthFold;
