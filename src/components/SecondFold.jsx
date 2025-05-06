import React from 'react';
import MarqueeComponent from '../layout/secondFold/MarqueeComponent';
import {
  Button,
  Heading,
  HStack,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react';

const SecondFold = () => {
  return (
    <VStack bgColor={'transparent'} h={'auto'} w={'100vw'} gap={0}>
      <MarqueeComponent />
      <HStack w={'100%'} px={['32px', '32px', '48px', '48px', '64px', '64px']}>
        <Text flexShrink='0' fontSize={['sm']}>
          500+ PROJECTS ACROSS THE NATION
        </Text>
        <Separator flex='1' />
      </HStack>

      <HStack
        w={'100%'}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}
        pt={24}
        gap={0}
        h={'auto'}>
        <VStack w={['0%', '0%', '30%']}></VStack>
        <VStack
          py={16}
          w={['100%', '100%', '70%']}
          display={'flex'}
          alignItems={['center', 'center', 'flex-start']}
          justifyContent={'center'}
          gap={8}>
          <Heading
            h={'auto'}
            className='inter'
            zIndex={0}
            fontWeight={'900'}
            fontSize={['20px', '30px', '30px', '32px', '32px', '32px']}
            lineHeight={['25px', '35px', '35px', '38px', '38px', '38px']}
            blendMode={'difference'}
            color={'#d9d9ec'}>
            MSL is part of Publicis Groupe and is a global leader in public
            relations and integrated communications. In India, MSL comprises
            four brands: MSL India, 20:20 MSL, Organic by MSL, and Publicis
            Consultants Asia.
          </Heading>
          <Text className='inter' color={'#d9d9ec'} fontSize={20}>
            MSL offers strategic counsel and creative thinking to promote its
            clients’ interests through impactful campaigns that engage multiple
            perspectives and holistic thinking. The agency has been recognized
            as Agency of the Year in India for seven consecutive years. Recent
            awards include Campaign South Asia in 2023, Fulcrum Masters
            Consultancy by Fulcrum Awards in 2023, and ET KaleidoAgency of the
            Year in 2024. MSL has also earned the ‘Great Place to Work‘
            certification six times in a row.
          </Text>
          <Button variant={'outline'} color={'#d9d9ec'}>
            Read more
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default SecondFold;
