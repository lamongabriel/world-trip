import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const base: ThemeOverride = {
	fonts: {
		heading: 'Poppins',
		body: 'Poppins'
	},
  colors: {
    brand: {
      highlight: '#FFBA08',
      black: '#000000',
      darkHeadingText: '#47585B',
      darkInfo: '#999999',
      white: '#FFFFFF',
      lightHeadingText: '#F5F8FA',
      lightInfo: '#DADADA'
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'brand.darkHeadingText',
        fontWeight: 500,
      }
    },
    Text: {
      baseStyle: {
        color: 'brand.darkHeadingText'
      }
    }
  },
	styles: {
		global: () => ({
			body: {
				bg: 'brand.white',
				color: 'brand.darkHeadingText',
			}
		})
	}
}

export const theme = extendTheme(base)