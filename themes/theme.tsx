// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    custom: {
      black: '#201831'
    }
  }
  //   colors: {
  //     base: {
  //       blue: {
  //         100: '#065EEA',
  //         300: '#121D50'
  //       },
  //       white: {
  //         100: '#F1F4FE'
  //       },
  //       black: '#111111'
  //     }
  //   },
  //   styles: {
  //     global: {
  //       body: {
  //         fontFamily: 'Nunito'
  //       }
  //     }
  //   },
  //   fontSizes: {
  //     's-48': '40px',
  //     's-36': '36px',
  //     's-24': '20px'
  //   },
  //   components: {
  //     Link: {
  //       baseStyle: {
  //         display: 'block',
  //         // fontWeight: '600',
  //         fontSize: '18px',
  //         margin: '12px 0'
  //       }
  //     }
  //   }
})

export default theme
