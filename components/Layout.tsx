import {
  Container,
  AppBar as MUIAppBar,
  styled,
  Toolbar as MUIToolbar,
  Typography,
  Box,
  Link,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const APP_TITLE = "Syndeo | Award contributions 🚀";
  const APP_DESCRIPTION = "Contribute and award";

  const metas = [
    { name: "description", content: APP_DESCRIPTION },
    { name: "viewport", content: "initial-scale=1, width=device-width" },
  ];

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>

        {metas.map(({ name, content }) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Head>

      <AppBar elevation={0}>
        <Toolbar>
          <Typography>Syndeo</Typography>
          <Typography>
            Built by{" "}
            <Link href="https://neopower.digital" target="_blank">
              NeoPower
            </Link>{" "}
          </Typography>
        </Toolbar>
      </AppBar>

      <LayoutOffset mb={2} />

      <Container maxWidth="sm">{children}</Container>
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
