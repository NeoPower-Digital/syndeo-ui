import syndeoLogo from "@/public/syndeo.png";
import { networkAtom } from "@/states/network.atom";
import { polkadotAPIAtom } from "@/states/polkadotAPI.atom";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import {
  Alert,
  AppBar as MUIAppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  styled,
  Toolbar as MUIToolbar,
} from "@mui/material";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useAtom } from "jotai";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import NetworkContractModal from "./NetworkContractModal";
import GitHubIcon from "@mui/icons-material/GitHub";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [{ chainName, chainURL, contractAddress }] = useAtom(networkAtom);

  const APP_TITLE = "Syndeo | Award contributions 🚀";
  const APP_DESCRIPTION = "Rewards distribution system";

  const metas = [
    { name: "description", content: APP_DESCRIPTION },
    { name: "viewport", content: "initial-scale=1, width=device-width" },
  ];

  const [_, setAPI] = useAtom(polkadotAPIAtom);

  useEffect(() => {
    const provider = new WsProvider(chainURL);

    ApiPromise.create({ provider }).then(setAPI);
  }, [chainURL]);

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

          <Stack direction="row" gap={2} alignItems="center">
            <Link
              color="inherit"
              href="https://neopower.digital"
              target="_blank"
            >
              Built by NeoPower
            </Link>

            <IconButton
              target="_blank"
              href="https://github.com/NeoPower-Digital/syndeo-ui"
            >
              <GitHubIcon />
            </IconButton>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpen}
              startIcon={<SyncAltIcon />}
            >
              Switch chain
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <LayoutOffset mb={6} />

      <Container maxWidth="sm">
        <Alert severity="info" sx={{ mb: 2 }}>
          UI for demo purposes (Network: {chainName})
        </Alert>

        <Alert severity="info" sx={{ mb: 2 }}>
          Contract address: {contractAddress}
        </Alert>

        {children}
      </Container>

      <LayoutOffset mb={6} />

      <NetworkContractModal modalOpen={modalOpen} handleClose={handleClose} />
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
