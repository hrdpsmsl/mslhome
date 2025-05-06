import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ThirdFold = () => {
  const [scrWidth, setScrWidth] = useState('0');
  const [caseStudies, setCaseStudies] = useState([]);
  const screenWidth = () => {
    const iwidth = window.innerWidth;
    if (iwidth <= 768) {
      setScrWidth('0');
    } else if (iwidth < 992) {
      setScrWidth('1');
    } else {
      setScrWidth('2');
    }
    console.log(scrWidth);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://mslindia.test/json/wp/v2/case-study?_embed&tags=16&orderby=date&order=desc',
        {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21zbGluZGlhLnRlc3QiLCJpYXQiOjE3NDQwODkzNjcsIm5iZiI6MTc0NDA4OTM2NywiZXhwIjo0ODk3Njg5MzY3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.dQSaYZSahmfnPCER0NywHEvV_Hy_VGoKxg61cwLYxdk', // Replace with your actual token
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();

      const parsed = data.map((item) => ({
        id: item.id,
        title: item.title.rendered,
        date: item.date,
        acf: item.acf,
      }));
      setCaseStudies(parsed);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    }
  };
  useEffect(() => {
    screenWidth();
    window.addEventListener('resize', screenWidth);
    fetchData();
    return () => {
      window.removeEventListener('resize', screenWidth);
    };
  }, []);
  return (
    <VStack
      gap={8}
      py={'64px'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      w={'100vw'}
      h={'auto'}
      bgColor={'transparent'}
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}>
      <Separator w={'100%'} />
      <Heading
        py={32}
        h={'auto'}
        w={'100%'}
        fontSize={['35px', '60px', '70px', '80px', '90px', '110px']}
        className='inter'>
        Notable Work
      </Heading>
      <Grid
        w={'100%'}
        gap={8}
        templateColumns={['1fr', '1fr', '1fr 1fr', '2fr 3fr']}>
        {caseStudies.length != 0 ? (
          caseStudies.slice(0, 2).map((item, key) => {
            return (
              <GridItem key={key}>
                <Container
                  bg={`url(${item.acf.featured})`}
                  w={'100%'}
                  h={['300px', '400px', '500px']}
                  bgColor={'gray.800'}
                  borderRadius={12}></Container>
                <HStack w={'100%'} py={2}>
                  <Image
                    w={'60px'}
                    src={item.acf.post_icon}
                    filter={'grayscale(100%)'}
                  />
                  <VStack
                    gap={0}
                    display={'flex'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}>
                    <Heading>{item.title}</Heading>
                    <Text>{item.acf.type.join(', ')}</Text>
                  </VStack>
                </HStack>
              </GridItem>
            );
          })
        ) : (
          <GridItem>
            <Container
              w={'100%'}
              h={['300px', '400px', '500px']}
              bgColor={'gray.800'}
              borderRadius={12}></Container>
            <HStack w={'100%'} py={2}>
              <Image w={'60px'} filter={'grayscale(100%)'} />
              <VStack
                gap={0}
                display={'flex'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}>
                <Heading>&nbsp;</Heading>
                <Text>&nbsp;</Text>
              </VStack>
            </HStack>
          </GridItem>
        )}
      </Grid>
      <Grid
        gap={8}
        w={'100%'}
        h={['300px', '400px', '500px']}
        templateColumns={{
          base: '1fr',
          sm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr',
          xl: '1fr 1fr 1fr', // Three columns in xl
        }}>
        {caseStudies.length != 0 ? (
          caseStudies.slice(2, 5).map((itemx, key) => {
            return (
              <GridItem
                key={key}
                colSpan={
                  key == 2 ? { xl: 1, lg: 2, md: 2, sm: 1, base: 1 } : ''
                }>
                <Container
                  bg={`url(${itemx.acf.featured})`}
                  h={['300px', '400px', '500px']}
                  bgColor={'gray.800'}
                  borderRadius={12}></Container>
                <HStack w={'100%'} py={2}>
                  <Image
                    w={'60px'}
                    src={itemx.acf.post_icon}
                    filter={'grayscale(100%)'}
                  />
                  <VStack
                    gap={0}
                    display={'flex'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}>
                    <Heading>{itemx.title}</Heading>
                    <Text>{itemx.acf.type.join(', ')}</Text>
                  </VStack>
                </HStack>
              </GridItem>
            );
          })
        ) : (
          <GridItem>
            <Container
              w={'100%'}
              h={['300px', '400px', '500px']}
              bgColor={'gray.800'}
              borderRadius={12}></Container>
            <HStack w={'100%'} py={2}>
              <Image w={'60px'} filter={'grayscale(100%)'} />
              <VStack
                gap={0}
                display={'flex'}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}>
                <Heading>&nbsp;</Heading>
                <Text>&nbsp;</Text>
              </VStack>
            </HStack>
          </GridItem>
        )}
        {/* <GridItem>
          <Container
            h={['300px', '400px', '500px']}
            bgColor={'gray.800'}
            borderRadius={12}></Container>
          <HStack w={'100%'} py={2}>
            <Image
              w={'60px'}
              src='./assets/script.png'
              filter={'grayscale(100%)'}
            />
            <VStack
              gap={0}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}>
              <Heading>Heading</Heading>
              <Text>Text</Text>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem>
          <Container
            h={['300px', '400px', '500px']}
            bgColor={'gray.800'}
            borderRadius={12}></Container>
          <HStack w={'100%'} py={2}>
            <Image
              w={'60px'}
              src='./assets/script.png'
              filter={'grayscale(100%)'}
            />
            <VStack
              gap={0}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}>
              <Heading>Heading</Heading>
              <Text>Text</Text>
            </VStack>
          </HStack>
        </GridItem>
        <GridItem colSpan={{ xl: 1, lg: 2, md: 2, sm: 1, base: 1 }}>
          <Container
            h={['300px', '400px', '500px']}
            bgColor={'gray.800'}
            borderRadius={12}></Container>
          <HStack w={'100%'} py={2}>
            <Image
              w={'60px'}
              src='./assets/script.png'
              filter={'grayscale(100%)'}
            />
            <VStack
              gap={0}
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}>
              <Heading>Heading</Heading>
              <Text>Text</Text>
            </VStack>
          </HStack>
        </GridItem> */}
      </Grid>

      <HStack w={'100vw'} py={32} gap={0} h={'auto'}>
        <VStack w={['0%', '0%', '25%']}></VStack>
        <VStack
          py={16}
          pt={36}
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
            fontSize={['20px', '30px', '30px', '32px', '32px', '32px']}
            lineHeight={['25px', '35px', '35px', '38px', '38px', '38px']}
            blendMode={'difference'}
            color={'#d9d9ec'}>
            Our Integrated Framework
          </Heading>
          <Text
            className='inter'
            color={'#d9d9ec'}
            fontSize={20}
            textAlign={['center', 'center', 'start']}>
            Our specialised functions that work with the core teams to create
            integrated solutions
          </Text>
          <Button variant={'outline'} color={'#d9d9ec'}>
            Read more
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ThirdFold;
