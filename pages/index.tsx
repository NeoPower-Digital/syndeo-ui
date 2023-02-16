import { NextLinkComposed } from "@/components/Link";
import { MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import { WalletAccount } from "@talismn/connect-wallets";

interface HomeProps {
  account: WalletAccount;
}

const Home: React.FC<HomeProps> = ({ account }) => {
  const menuItems = [
    {
      path: "award",
      label: "⭐ Award points (MEMBER)",
    },
    {
      path: "distribute",
      label: "💸 Distribute rewards (ADMIN)",
    },
  ];

  return (
    <Stack gap={2}>
      <Typography variant="h4">🏠 Random DAO</Typography>
      <Typography>What do you want to do?</Typography>

      <Paper>
        <MenuList>
          {menuItems.map(({ path, label }, index) => (
            <MenuItem
              key={index}
              component={NextLinkComposed}
              to={{ pathname: path }}
            >
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Stack>
  );
};

export default Home;
