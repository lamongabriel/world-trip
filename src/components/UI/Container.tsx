import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ContainerProps extends BoxProps{
  children: ReactNode
}

export default function Container ({ children, ...rest }: ContainerProps) {
  return (
    <Box maxW='1160px' w='full' px='1rem' mx='auto' {...rest}>
      {children}
    </Box>
  )
}