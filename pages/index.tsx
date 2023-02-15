import { NextLinkComposed } from "@/components/Link";
import { Button, Stack, Typography } from "@mui/material";
import { WalletAccount } from "@talismn/connect-wallets";

interface HomeProps {
  account: WalletAccount;
}

const Home: React.FC<HomeProps> = ({ account }) => {
  return (
    <Stack gap={2}>
      <Typography variant="h3">Random DAO</Typography>
      <Typography>Are you a member? Award points to other members</Typography>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "award" }}
      >
        ⭐ Award points ⭐
      </Button>

      <Typography>Are you an admin? distribute the rewards!</Typography>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "distribute" }}
        color="secondary"
      >
        🚀 Distribute rewards 🚀
      </Button>
    </Stack>
  );
};

export default Home;
