import Image from "next/image";

import Layout from "@/components/UI/Layout";
import Container from "@/components/UI/Container";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import bg from '@/assets/BlueBg.png'
import airplane from '@/assets/Airplane.svg'

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
              <Heading>
                5 Continents, <br/> infinite possibilities.
              </Heading>
              <Text>
                It&apos;s finally time to get off the drawing board that <br/> trip you&apos;ve been dreamming about.
              </Text>
            </Flex>
            <Box pt={36}>
              <Image src={airplane} alt='Airplane'/> 
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
