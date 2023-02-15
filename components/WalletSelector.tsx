import { Button, IconButton, Typography } from "@mui/material";
import { WalletSelect } from "@talismn/connect-components";
import { WalletAccount } from "@talismn/connect-wallets";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
interface WalletSelectorProps {
  setAccount: (account: WalletAccount) => void;
}

const WalletSelector: React.FC<WalletSelectorProps> = ({ setAccount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WalletSelect
      // [Required] The dapp name
      dappName="Syndeo"
      // Use if the dapp is controlling the modal toggle.
      open={isOpen}
      // The component that opens the WalletSelect Modal
      triggerComponent={
        <Button
          color="inherit"
          // `onClick` is optional here
          onClick={(wallets) => {
            // Do stuff with the supported wallets
            setIsOpen(true);
          }}
          endIcon={<LoginIcon />}
        >
          Connect
        </Button>
      }
      // Override the default header
      header={<Typography variant="h4">Connect wallet</Typography>}
      // If `showAccountsList={true}`, then account selection modal will show up after selecting the a wallet. Default is `false`.
      showAccountsList={true}
      // Callback when the WalletSelect Modal is opened
      // onWalletConnectOpen={(wallets) => console.log(wallets)}
      // Callback when the WalletSelect Modal is closed
      // onWalletConnectClose={() => console.log()}
      // Callback when a wallet is selected on the WalletSelect Modal
      // onWalletSelected={(wallet) => console.log(wallet)}
      // Callback when the subscribed accounts for a selected wallet are updated
      // onUpdatedAccounts={(accounts) => console.log(accounts)}
      // Callback when an account is selected on the WalletSelect Account Modal. Only relevant when `showAccountsList=true`
      onAccountSelected={(account: WalletAccount) => {
        console.log(account);
        setAccount(account);
      }}
      // Callback when an error occurs. Also clears the error on Modal actions:
      // `onWalletConnectOpen`, `onWalletSelected`, `onAccountSelected` and `onWalletConnectClose`,
      onError={(error) => console.log(error)}
    />
  );
};

export default WalletSelector;
