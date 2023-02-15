import { NextLinkComposed } from "@/components/Link";
import {
  Button,
  Divider,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { WalletAccount } from "@talismn/connect-wallets";

interface HomeProps {
  account: WalletAccount;
}

const Home: React.FC<HomeProps> = ({ account }) => {
  return (
    <Stack gap={2}>
      <Typography variant="h3">Random DAO</Typography>
      <Typography>What do you want to do?</Typography>

      <Paper>
        <MenuList>
          <MenuItem component={NextLinkComposed} to={{ pathname: "award" }}>
            ⭐ Award points
          </MenuItem>

          <Divider />

          <MenuItem
            component={NextLinkComposed}
            to={{ pathname: "distribute" }}
          >
            💸 Distribute rewards (ADMIN)
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
};

export default Home;
