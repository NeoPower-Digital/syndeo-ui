import Layout from "@/components/Layout";
import WalletWidget from "@/components/WalletWidget";
import { DEFAULT_CHAIN } from "@/constants/constants";
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
import { Provider } from "jotai";

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
  return (
    <Provider>
      <CacheProvider value={emotionCache}>
        {globalStyles}

        <ThemeProvider theme={responsiveFontSizes(createTheme(THEME))}>
          <Layout>
            <Alert severity="info" sx={{ mb: 2 }}>
              UI for demo purposes (Network: {DEFAULT_CHAIN.NAME})
            </Alert>

            <Alert severity="info" sx={{ mb: 2 }}>
              Contract address: {DEFAULT_CHAIN.CONTRACT_ADDRESS}
            </Alert>
            <WalletWidget />

            <Paper sx={{ p: 4 }} variant="outlined">
              <Component {...pageProps} />
            </Paper>
          </Layout>

          <CssBaseline enableColorScheme />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
