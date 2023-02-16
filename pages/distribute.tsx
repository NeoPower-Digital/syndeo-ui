import { NextLinkComposed } from "@/components/Link";
import useQuery from "@/hooks/useQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface DistributeProps {}

const PAGE_TITLE = "💸 Distribute rewards";
const ACTION_LABEL = "Distribute rewards";

const SUCCESS_MESSAGE = "Rewards distributed correctly!";
const ERROR_MESSAGE = "An error occured, please try again";

// TODO: Use transaction to send to contract
const Distribute: React.FC<DistributeProps> = () => {
  const { points, awardedMembers, funds } = useQuery();

  // Status management
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const organizationData = [
    {
      icon: "⭐",
      value: points,
      label: "Points assigned",
    },
    {
      icon: "👤",
      value: awardedMembers,
      label: "Members awarded",
    },
    {
      icon: "💰",
      value: Intl.NumberFormat("en").format(funds),
      label: "Funds",
    },
  ];

  // TODO: Submit transaction and remove simulation
  const handleSubmit = () => {
    console.log("DISTRIBUTE!");

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSnackbarOpen(true);
    }, 4000);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
    setIsError(false);
  };

  return (
    <Stack gap={2}>
      <Stack direction="row" gap={2}>
        <IconButton component={NextLinkComposed} to={{ pathname: "/" }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4">{PAGE_TITLE}</Typography>
      </Stack>

      <Typography>
        Trigger the reward distribution for your organization to proportionally
        reward members. After the distribution, all points will be reset.
      </Typography>

      {organizationData.map(({ icon, value, label }, index) => (
        <Card key={index}>
          <CardContent>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="h3">{icon}</Typography>

              <Stack>
                <Typography variant="h5">{value}</Typography>
                <Typography color="text.secondary">{label}</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}

      <LoadingButton
        loading={isLoading}
        variant="contained"
        onClick={handleSubmit}
        loadingPosition="end"
      >
        <span>{isLoading ? "Sending TX..." : ACTION_LABEL}</span>
      </LoadingButton>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert severity={isError ? "error" : "success"}>
          {isError ? ERROR_MESSAGE : SUCCESS_MESSAGE}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Distribute;
