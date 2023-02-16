import { Button, Paper, Stack, Typography } from "@mui/material";
import { Wallet, WalletAccount } from "@talismn/connect-wallets";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletSelector from "./WalletSelector";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

interface WalletWidgetProps {
  account?: WalletAccount;
  setAccount: (account: WalletAccount) => void;
}

const truncate = (address: string): string => {
  if (!address) return "";

  const [h, t] = [6, 6];
  const head = address.slice(0, h);
  const tail = address.slice(-1 * t, address.length);
  return address.length > h + t ? [head, tail].join("...") : address;
};

const WalletWidget: React.FC<WalletWidgetProps> = ({ account, setAccount }) => {
  return (
    <Paper>
      <Stack p={2} mb={4} direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={2}>
          {account ? (
            <AccountBalanceWalletIcon fontSize="large" />
          ) : (
            <EmojiPeopleIcon fontSize="large" />
          )}

          <Typography>
            {account ? truncate(account?.address) : "Hi stranger!"}
          </Typography>
        </Stack>

        {account ? (
          <Button
            color="error"
            endIcon={<LogoutIcon />}
            onClick={() => setAccount(null as unknown as WalletAccount)}
          >
            Logout
          </Button>
        ) : (
          <WalletSelector setAccount={setAccount} />
        )}
      </Stack>
    </Paper>
  );
};

export default WalletWidget;
