import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg'

export default function Header () {

  const isWide = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as='header'
      alignItems='center'
      justifyContent='center'
      h={isWide ? '100px' : '50px'}
      position='fixed'
      top='0'
      left='0'
      w='full'
      bg='white'
    >
      <Box as={Link} w={isWide ? '180px' : '100px'} href='/'>
        <Image src={logo} alt='World Trip Logo' />
      </Box>
    </Flex>
  )
}