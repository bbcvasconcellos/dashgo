import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/styles/theme';
import { SidebarDrawerProvider } from '../src/provider/SidebarDrawerContext';
import { makeServer } from '../src/service/mirage';


//confirma se a aplicacao esta em ambiente de producao para poder rodar o mirage
if(process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
