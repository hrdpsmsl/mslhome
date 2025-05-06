import React from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  VStack,
  Grid,
  Heading,
  Image,
  Separator,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Grid
      pos={'relative'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      h='auto'
      zIndex={12}
      backgroundColor='black'
      backgroundSize={'cover'}
      templateColumns={['1fr', '1fr', '1fr', '1fr 2fr', '1fr 2fr', '1fr 2fr']}
      py={8}
      pb={2}>
      <HStack
        h={'auto'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-start'}>
        <Image src='./assets/msl-25-logo.png' w={'40%'} />
        <Text
          textAlign={'end'}
          w={'60%'}
          color='white'
          className='comfortaa'
          textTransform='capitalize'
          fontSize={24}>
          Get in Touch
        </Text>
      </HStack>

      <VStack
        gap={0}
        align='start'
        spacing={5}
        ml={['0px', '100px']}
        display={'flex'}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}>
        <Link
          pb={2}
          className='comfortaa'
          textTransform='lowercase'
          href=''
          color='blue.300'
          fontSize={{ base: '20px', md: '36px' }}
          zIndex={2}>
          xyz@abc.com
        </Link>
        <Box pb={4}>
          <HStack spacing={4} gap={4} wrap='wrap' lineHeight={0.9}>
            <Link
              className='comfortaa'
              textTransform='capitalize'
              href='#'
              color='orange.200'
              fontSize='18px'
              zIndex={2}>
              Instagram
            </Link>
            <Link
              className='comfortaa'
              textTransform='capitalize'
              href='#'
              color='orange.200'
              fontSize='18px'
              zIndex={2}>
              Twitter
            </Link>
            <Link
              className='comfortaa'
              textTransform='capitalize'
              href='#'
              color='orange.200'
              fontSize='18px'
              zIndex={2}>
              Facebook
            </Link>
          </HStack>
        </Box>
        <Box>
          <VStack w={'100%'} lineHeight={0.9} alignItems={'flex-end'}>
            <HStack gap={4} fontWeight={300}>
              <Link
                className='comfortaa'
                textTransform='capitalize'
                color='gray.400'
                fontSize='14px'
                zIndex={2}>
                COOKIE POLICY
              </Link>
              <Link
                className='comfortaa'
                textTransform='capitalize'
                color='gray.400'
                fontSize='14px'
                zIndex={2}>
                PRIVACY POLICY
              </Link>
            </HStack>
            <Separator w={'100%'} />
            <Link
              py={5}
              className='gothic'
              textTransform='capitalize'
              color='gray.300'
              fontSize='24px'
              zIndex={2}
              pointerEvents={'none'}
              fontWeight={900}>
              © 2025 | MSL INDIA
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Grid>
  );
};

export default Footer;
