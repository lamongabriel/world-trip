import { ReactNode } from "react"
import { Box, useBreakpointValue } from "@chakra-ui/react"

import Header from "@/components/Header"

interface LayoutProps {
  children: ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const isWide = useBreakpointValue({ base: false, lg: true })
  
  return (
    <>
      <Header />
      <Box minH='100vh' pt={isWide ? '100px' : '50px'}>
        {children}
      </Box>
    </>
  )
}