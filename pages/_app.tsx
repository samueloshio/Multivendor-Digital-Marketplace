import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@/components/Theme/ThemeProvider"

export default function App({ Component, pageProps }: AppProps) {

  return (<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Component {...pageProps} />
  </ThemeProvider>)
}
