import React, { useEffect, useState } from 'react';
import {
  Button,
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
  Menu,
  Checkbox,
  Portal,
  Tabs,
} from '@chakra-ui/react';
import {
  RiArrowDownWideLine,
  RiArrowUpWideLine,
  RiLayoutMasonryFill,
  RiListCheck2,
} from '@remixicon/react';
import { motion, AnimatePresence } from 'motion/react';
import SixthFold from '../components/SixthFold';

const servicesOptions = [
  'Strategy & Insights',
  'Digital & Social Media',
  'Media & Crisis',
  'Policy & Regulation',
  'Content & Video',
];

const entityOptions = [
  { name: 'MSL', color: '#ffe082', value: 'MSL' },
  { name: 'PCA', color: '#f099ff', value: 'PCA' },
  { name: 'MSL 20:20', color: '#61ceff', value: '2020' },
  { name: 'Organic by MSL', color: '#70f8ff', value: 'Organic' },
];

const Work = () => {
  const [viewType, setViewType] = useState(true);
  const [arrowPos, setArrowPos] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [selectedType, setSelectedType] = useState(servicesOptions);
  const [selectedEntity, setSelectedEntity] = useState('All');

  const handleToggle = (option) => {
    setSelectedOptions((prev) => {
      const newOptions = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      // If no option selected, show all services
      setSelectedType(newOptions.length === 0 ? servicesOptions : newOptions);

      return newOptions;
    });
  };
  const handleTabChange = (index) => {
    setSelectedEntity(index.value);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://mslindia.test/json/wp/v2/case-study?_embed&orderby=date&order=desc',
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

      const filtered = data.filter((item) => {
        if (selectedEntity === 'All') {
          const { type } = item.acf;
          const typeMatch =
            Array.isArray(type) && type.some((t) => selectedType.includes(t));

          return typeMatch;
        } else {
          const { entity, type } = item.acf;
          const entityMatch = entity === selectedEntity;
          const typeMatch =
            Array.isArray(type) && type.some((t) => selectedType.includes(t));

          return entityMatch && typeMatch;
        }
      });

      const parsed = filtered.map((item) => ({
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
    fetchData();
  }, [selectedEntity, selectedType]);

  return (
    <VStack
      className='inter'
      minH={'100vh'}
      px={['32px', '32px', '48px', '48px', '64px', '64px']}
      paddingTop={('56px', '56px', '112px', '112px', '128px', '128px')}>
      <Heading
        color={'white'}
        py={16}
        h={'auto'}
        w={'100%'}
        fontSize={['35px', '60px', '70px', '80px', '90px', '110px']}
        className='inter'>
        Featured Work
      </Heading>
      <HStack
        py={16}
        w={'100vw'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        overflowX={'scroll'}
        px={['32px', '32px', '48px', '48px', '64px', '64px']}>
        <Button
          variant={'subtle'}
          outline={'none'}
          py={8}
          px={6}
          borderRadius={10}
          border={'1px solid rgb(255, 140, 95)'}
          transition={'0.5s'}
          _hover={{
            border: '1px solid transparent',
            boxShadow: '0px 0px 4px 4px rgba(255, 140, 95,0.85)',
          }}
          onClick={() => {
            setViewType(!viewType);
          }}>
          {viewType ? (
            <RiListCheck2 size={132} />
          ) : (
            <RiLayoutMasonryFill size={132} />
          )}
        </Button>
        <Menu.Root
          closeOnSelect={true}
          onExitComplete={() => {
            setArrowPos(true);
          }}>
          <Menu.Trigger
            asChild
            border={'1px solid rgb(255, 140, 95)'}
            transition={'0.5s'}
            _hover={{
              border: '1px solid transparent',
              boxShadow: '0px 0px 4px 4px rgba(255, 140, 95,0.85)',
            }}>
            <Button
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              py={8}
              px={6}
              fontSize={20}
              variant={'subtle'}
              outline={'none'}
              w={'300px'}
              borderRadius={10}
              onClick={() => {
                setArrowPos(!arrowPos);
              }}>
              {'All Services'}
              <Spacer />
              {arrowPos ? <RiArrowDownWideLine /> : <RiArrowUpWideLine />}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content w={'300px'} className='inter'>
                <Stack>
                  {servicesOptions.map((option) => (
                    <Menu.Item
                      key={option}
                      closeOnSelect={false}
                      bg={'none'}
                      _hover={{ background: 'none' }}
                      _focus={{ background: 'none' }}>
                      <Checkbox.Root
                        checked={selectedOptions.includes(option)}
                        onCheckedChange={() => handleToggle(option)}>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontSize={20} className='inter'>
                          {option}
                        </Checkbox.Label>
                      </Checkbox.Root>
                    </Menu.Item>
                  ))}
                </Stack>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        <Tabs.Root
          variant='enclosed'
          defaultValue={'All'}
          onValueChange={handleTabChange}>
          <Tabs.List
            borderRadius={10}
            className='inter'
            py={'9px'}
            border={'1px solid rgb(255, 140, 95)'}
            transition={'0.5s'}
            _hover={{
              border: '1px solid transparent',
              boxShadow: '0px 0px 4px 4px rgba(255, 140, 95,0.85)',
            }}>
            <Tabs.Trigger
              py={6}
              px={6}
              fontSize={20}
              value='All'
              transition={'0.3s'}
              _selected={{
                borderRadius: '10px',
                color: '#ff6b9d',
                bg: 'black',
              }}>
              All Entities
            </Tabs.Trigger>
            {entityOptions.map((item, key) => {
              return (
                <Tabs.Trigger
                  key={key}
                  py={6}
                  px={6}
                  fontSize={20}
                  transition={'0.3s'}
                  outline={'none'}
                  _selected={{
                    borderRadius: '10px',
                    color: item.color,
                    bg: 'black',
                  }}
                  value={item.value}>
                  {item.name}
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
        </Tabs.Root>
      </HStack>
      <VStack w={'100%'} minH={'60vh'} py={16} pb={32}>
        <AnimatePresence>
          {viewType ? (
            <Grid
              w='100%'
              templateColumns='repeat(auto-fit, minmax(400px, 1fr))'
              gap={6}>
              {caseStudies.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}>
                  <Container
                    cursor={'pointer'}
                    bg={`url('${item.acf.featured}')`}
                    h={['300px', '600px']}
                    display={'flex'}
                    alignItems={'flex-end'}
                    py={['32px', '32px', '48px', '48px', '64px', '32px']}
                    borderRadius={10}
                    border={'1px solid grey'}></Container>
                  <HStack gap={4} py={2} cursor={'pointer'}>
                    <Image src='./assets/msl-logo-white.png' w={'50px'} />
                    <VStack
                      gap={0}
                      w={'100%'}
                      display={'flex'}
                      alignItems={'flex-start'}
                      justifyContent={'flex-start'}>
                      <Heading
                        color={'white'}
                        textOverflow={'ellipsis'}
                        overflow={'hidden'}
                        className='inter'
                        fontWeight={'100'}>
                        {item.title}
                      </Heading>
                      <Heading
                        color={'white'}
                        textOverflow={'ellipsis'}
                        overflow={'hidden'}
                        className='inter'
                        fontWeight={'100'}
                        fontSize={'14px'}>
                        {item.acf.type.join(', ')}
                      </Heading>
                    </VStack>
                  </HStack>
                </motion.div>
              ))}
            </Grid>
          ) : (
            <VStack>
              {caseStudies.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}>
                  <HStack
                    w={'100vw'}
                    mx={['32px', '32px', '48px', '48px', '64px', '64px']}
                    borderRadius={10}
                    border={'1px solid rosybrown'}
                    gap={4}
                    py={2}
                    cursor={'pointer'}
                    display={'flex'}
                    justifyContent={'flex-start'}>
                    <Image src='./assets/msl-logo-white.png' w={'50px'} />
                    <VStack
                      gap={0}
                      w={'100%'}
                      display={'flex'}
                      alignItems={'flex-start'}
                      justifyContent={'flex-start'}>
                      <Heading
                        color={'white'}
                        textOverflow={'ellipsis'}
                        overflow={'hidden'}
                        className='inter'
                        fontWeight={'100'}>
                        {item.title}
                      </Heading>
                      <Heading
                        color={'white'}
                        textOverflow={'ellipsis'}
                        overflow={'hidden'}
                        className='inter'
                        fontWeight={'100'}
                        fontSize={'14px'}>
                        {item.acf.type.join(', ')}
                      </Heading>
                    </VStack>
                  </HStack>
                </motion.div>
              ))}
            </VStack>
          )}
        </AnimatePresence>
      </VStack>
      <SixthFold />
    </VStack>
  );
};

export default Work;
