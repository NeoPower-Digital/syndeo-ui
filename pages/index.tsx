import { NextLinkComposed } from "@/components/Link";
import WalletSelector from "@/components/WalletSelector";
import { Button, Stack, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { WalletAccount } from "@talismn/connect-wallets";

interface HomeProps {
  account: WalletAccount;
}

const Home: React.FC<HomeProps> = ({ account }) => {
  return (
    <Stack gap={2}>
      <Typography variant="caption">
        Connected as: ({account?.name}) {account?.address}
      </Typography>

      <Typography variant="h3">Choose an action:</Typography>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "award" }}
      >
        ⭐ Award points ⭐
      </Button>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "distribute" }}
      >
        🚀 Distribute rewards 🚀
      </Button>
    </Stack>
  );
};

export default Home;
