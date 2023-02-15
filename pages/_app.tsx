import Layout from "@/components/Layout";
import WalletSelector from "@/components/WalletSelector";
import WalletWidget from "@/components/WalletWidget";
import createEmotionCache from "@/styles/createEmotionCache";
import GlobalStyles from "@/styles/globals.style";
import { THEME } from "@/styles/theme.style";
import { CacheProvider } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  Paper,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { WalletAccount } from "@talismn/connect-wallets";
import { useState } from "react";

const clientSideEmotionCache = createEmotionCache();

interface AppProps {
  Component: any;
  pageProps: any;
  emotionCache: any;
}

const globalStyles = <GlobalStyles />;

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  const [account, setAccount] = useState<WalletAccount>();

  return (
    <CacheProvider value={emotionCache}>
      {globalStyles}

      <ThemeProvider theme={responsiveFontSizes(createTheme(THEME))}>
        <Layout>
          <WalletWidget account={account} setAccount={setAccount} />

          <Component {...pageProps} account={account} />
        </Layout>

        <CssBaseline enableColorScheme />
      </ThemeProvider>
    </CacheProvider>
  );
}
