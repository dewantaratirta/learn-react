import Header from './components/nav/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme  } from '@rainbow-me/rainbowkit'

import { config } from './wagmi.jsx'
const queryClient = new QueryClient();

const CustomRainbowContext = ({children}) => {
  return (
    <RainbowKitProvider
      theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'Inter, serif',
        overlayBlur: 'small',
      })}
      modalSize='compact'
    >
      {children}
    </RainbowKitProvider>
  )
}

export default function layout(props) {
  const { children } = props
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <CustomRainbowContext>
            <Header />
            {children}
          </CustomRainbowContext>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
