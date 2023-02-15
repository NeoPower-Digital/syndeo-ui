import {
  AppBar as MUIAppBar,
  Box,
  Container,
  Link,
  styled,
  Toolbar as MUIToolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import syndeoLogo from "@/public/syndeo.png";
import Image from "next/image";

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

      <AppBar elevation={0} enableColorOnDark>
        <Toolbar>
          <Image
            src={syndeoLogo}
            alt="Picture of the author"
            width={80}
            height={52}
          />
          <Link color="inherit" href="https://neopower.digital" target="_blank">
            Built by NeoPower
          </Link>{" "}
        </Toolbar>
      </AppBar>

      <LayoutOffset mb={6} />

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
