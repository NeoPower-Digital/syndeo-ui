import Layout from "@/components/Layout";
import WalletWidget from "@/components/WalletWidget";
import createEmotionCache from "@/styles/createEmotionCache";
import GlobalStyles from "@/styles/globals.style";
import { THEME } from "@/styles/theme.style";
import { CacheProvider } from "@emotion/react";
import {
  Alert,
  createTheme,
  CssBaseline,
  Paper,
  responsiveFontSizes,
  ThemeProvider,
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
          <Alert severity="info" sx={{ mb: 2 }}>
            UI for demo purposes
          </Alert>
          <WalletWidget account={account} setAccount={setAccount} />

          <Paper sx={{ p: 4 }} variant="outlined">
            <Component {...pageProps} account={account} />
          </Paper>
        </Layout>

        <CssBaseline enableColorScheme />
      </ThemeProvider>
    </CacheProvider>
  );
}
