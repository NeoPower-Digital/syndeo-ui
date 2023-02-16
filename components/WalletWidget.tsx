import { accountAtom } from "@/states/account.atom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { WalletAccount } from "@talismn/connect-wallets";
import { useAtom } from "jotai";
import WalletSelector from "./WalletSelector";

interface WalletWidgetProps {}

const truncate = (address: string): string => {
  if (!address) return "";

  const [h, t] = [6, 6];
  const head = address.slice(0, h);
  const tail = address.slice(-1 * t, address.length);
  return address.length > h + t ? [head, tail].join("...") : address;
};

const WalletWidget: React.FC<WalletWidgetProps> = () => {
  const [account, setAccount] = useAtom(accountAtom);

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
          <WalletSelector />
        )}
      </Stack>
    </Paper>
  );
};

export default WalletWidget;
