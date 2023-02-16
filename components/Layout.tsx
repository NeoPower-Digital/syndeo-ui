import { DEFAULT_CHAIN } from "@/constants/constants";
import syndeoLogo from "@/public/syndeo.png";
import { polkadotAPIAtom } from "@/states/polkadotAPI.atom";
import {
  AppBar as MUIAppBar,
  Box,
  Container,
  Link,
  styled,
  Toolbar as MUIToolbar,
} from "@mui/material";
import { WsProvider, ApiPromise } from "@polkadot/api";
import { useAtom } from "jotai";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const APP_TITLE = "Syndeo | Award contributions 🚀";
  const APP_DESCRIPTION = "Rewards distribution system";

  const metas = [
    { name: "description", content: APP_DESCRIPTION },
    { name: "viewport", content: "initial-scale=1, width=device-width" },
  ];

  const [_, setAPI] = useAtom(polkadotAPIAtom);

  useEffect(() => {
    console.log("LAYOUT EFFECT");
    const provider = new WsProvider(DEFAULT_CHAIN.URL);

    ApiPromise.create({ provider }).then(setAPI);
  }, []);

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>

        {metas.map(({ name, content }) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Head>

      <AppBar elevation={0} enableColorOnDark>
        <Toolbar>
          <Image src={syndeoLogo} alt="Syndeo logo" width={80} height={52} />
          <Link color="inherit" href="https://neopower.digital" target="_blank">
            Built by NeoPower
          </Link>
        </Toolbar>
      </AppBar>

      <LayoutOffset mb={6} />

      <Container maxWidth="sm">{children}</Container>

      <LayoutOffset mb={6} />
    </>
  );
};

export default Layout;

const LayoutOffset = styled(Box)(({ theme }) => theme.mixins.toolbar);

const Toolbar = styled(MUIToolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppBar = styled(MUIAppBar)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;
