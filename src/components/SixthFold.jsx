import {
  Button,
  Field,
  Heading,
  HStack,
  Input,
  Separator,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const SixthFold = () => {
  return (
    <>
      <Separator w={'100%'} />
      <HStack w={'100vw'} py={32} gap={0} h={'auto'}>
        <VStack w={['0%', '0%', '25%']}></VStack>
        <VStack
          w={['95%', '95%', '70%']}
          px={['32px', '32px', '48px', '48px', '64px', '64px']}
          display={'flex'}
          alignItems={['center', 'center', 'flex-start']}
          justifyContent={'center'}
          gap={8}>
          <Heading
            h={'auto'}
            className='inter'
            zIndex={0}
            fontWeight={'900'}
            fontSize={['35px', '50px', '60px', '70px', '80px', '110px']}
            lineHeight={['35px', '50px', '60px', '70px', '80px', '110px']}
            blendMode={'difference'}>
            Begin Immediately.
          </Heading>
          <Heading
            h={'auto'}
            className='inter'
            zIndex={0}
            fontWeight={'900'}
            fontSize={['20px', '30px', '30px', '32px', '32px', '32px']}
            lineHeight={['25px', '35px', '35px', '38px', '38px', '38px']}
            blendMode={'difference'}
            color={'#d9d9ec'}
            pb={16}>
            We’re excited to craft a seamless digital experience for your ideas.
            Share your details below, and let’s bring your vision to life!
          </Heading>
          <Separator w={'100%'} />
          <Field.Root gap={0}>
            <Field.Label className='inter' fontWeight={'100'}>
              YOUR NAME <Field.RequiredIndicator />
            </Field.Label>
            <Input
              fontSize='2xl'
              type={'text'}
              placeholder='Full Name'
              variant={'flushed'}
              className='inter'
              size={'2xl'}
              _placeholder={{ color: 'gray.700', fontSize: '2xl' }}
            />
          </Field.Root>
          <Field.Root gap={0}>
            <Field.Label className='inter' fontWeight={'100'}>
              YOUR EMAIL <Field.RequiredIndicator />
            </Field.Label>
            <Input
              fontSize='2xl'
              placeholder='Email Address'
              type={'email'}
              variant={'flushed'}
              className='inter'
              size={'2xl'}
              _placeholder={{ color: 'gray.700', fontSize: '2xl' }}
            />
          </Field.Root>
          <Field.Root gap={0}>
            <Field.Label className='inter' fontWeight={'100'}>
              YOUR COMPANY <Field.RequiredIndicator />
            </Field.Label>
            <Input
              fontSize='2xl'
              type={'text'}
              placeholder='Company Name'
              variant={'flushed'}
              className='inter'
              size={'2xl'}
              _placeholder={{ color: 'gray.700', fontSize: '2xl' }}
            />
          </Field.Root>
          <Field.Root gap={4}>
            <Field.Label className='inter' fontWeight={'100'}>
              YOUR MESSAGE <Field.RequiredIndicator />
            </Field.Label>
            <Textarea
              fontSize='2xl'
              placeholder='What are your project goals, requirements or specific timeline...'
              variant={'flushed'}
              className='inter'
              size={'2xl'}
              minH={'160px'}
              _placeholder={{ color: 'gray.700', fontSize: '2xl' }}
            />
          </Field.Root>
          <Button>SUBMIT REQUEST</Button>
        </VStack>
      </HStack>
    </>
  );
};

export default SixthFold;
