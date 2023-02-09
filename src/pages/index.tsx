import Image from "next/image";

import Layout from "@/components/UI/Layout";
import Container from "@/components/UI/Container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import bg from '@/assets/BlueBg.png'
import airplane from '@/assets/Airplane.svg'
import nightLife from '@/assets/Nightlife.svg'
import beach from '@/assets/Beach.svg'
import modern from '@/assets/modern.svg'
import classic from '@/assets/Classic.svg'
import more from '@/assets/More.svg'

export default function Home() {
  return (
    <Layout>
      <Box
        bgImage={bg.src}
        bgPosition='center'
        bgSize='cover'
        h='370px'
      >
        <Container h='full'>
          <Flex align='center' justify='space-between' h='full'>
            <Flex direction='column' gap='1.5rem'>
              <Heading color='brand.lightHeadingText'>
                5 Continents, <br/> infinite possibilities.
              </Heading>
              <Text color='brand.lightInfo'>
                It&apos;s finally time to get off the drawing board that <br/> trip you&apos;ve been dreamming about.
              </Text>
            </Flex>
            <Box pt={36}>
              <Image src={airplane} alt='Airplane'/> 
            </Box>
          </Flex>
        </Container>
      </Box>
      <Container>
        <Flex py={20} justifyContent='space-between'>
          <Box textAlign='center' maxW={40} w='full'>
            <Box w={20} mx='auto'>
              <Image src={nightLife} alt='Night Life Drink'/>
            </Box>
            <Text mt={4} fontWeight={600} fontSize='2xl'>
              night life
            </Text>
          </Box>
          <Box textAlign='center' maxW={40} w='full'>
            <Box w={20} mx='auto'>
              <Image src={beach} alt='Night Life Drink'/>
            </Box>
            <Text mt={4} fontWeight={600} fontSize='2xl'>
              beach
            </Text>
          </Box>
          <Box textAlign='center' maxW={40} w='full'>
            <Box w={20} mx='auto'>
              <Image src={modern} alt='Night Life Drink'/>
            </Box>
            <Text mt={4} fontWeight={600} fontSize='2xl'>
              modern
            </Text>
          </Box>
          <Box textAlign='center' maxW={40} w='full'>
            <Box w={20} mx='auto'>
              <Image src={classic} alt='Night Life Drink'/>
            </Box>
            <Text mt={4} fontWeight={600} fontSize='2xl'>
              classic
            </Text>
          </Box>
          <Box textAlign='center' maxW={40} w='full'>
            <Box w={20} mx='auto'>
              <Image src={more} alt='Night Life Drink'/>
            </Box>
            <Text mt={4} fontWeight={600} fontSize='2xl'>
              and more...
            </Text>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
