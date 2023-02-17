import { NextLinkComposed } from "@/components/Link";
import useQuery, { emptyStats } from "@/hooks/useQuery";
import useTransaction from "@/hooks/useTransaction";
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
import { useEffect, useState } from "react";

interface DistributeProps {}

const PAGE_TITLE = "💸 Distribute rewards";
const ACTION_LABEL = "Distribute rewards";

const SUCCESS_MESSAGE = "Rewards distributed correctly!";
const ERROR_MESSAGE = "An error occured, please try again";

const organizationData: Array<{
  icon: string;
  key: "assignedPoints" | "membersAwarded" | "funds";
  label: string;
}> = [
  {
    icon: "⭐",
    key: "assignedPoints",
    label: "Points assigned",
  },
  {
    icon: "👤",
    key: "membersAwarded",
    label: "Members awarded",
  },
  {
    icon: "💰",
    key: "funds",
    label: "Funds",
  },
];

const Distribute: React.FC<DistributeProps> = () => {
  // Stats
  const [dataLoading, setDataLoading] = useState(false);
  const [orgStats, setOrgStats] = useState(emptyStats);

  // Status management
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isError, setIsError] = useState(false);
  const { send } = useTransaction(setIsLoading, setIsFinished, setIsError);
  const { getPromise } = useQuery();

  useEffect(() => {
    setDataLoading(true);

    getPromise()
      .then((stats) => {
        console.log({ stats });
        setOrgStats(stats);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error({ error });
        setDataLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    send("distributeRewards", null);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsFinished(false);
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

      {organizationData.map(({ icon, label, key }, index) => (
        <Card key={index}>
          <CardContent>
            <Stack direction="row" gap={2} alignItems="center">
              <Typography variant="h3">{icon}</Typography>

              <Stack>
                <Typography variant="h5">
                  {dataLoading
                    ? "..."
                    : key !== "funds"
                    ? orgStats[key]
                    : parseFloat(orgStats[key].replace(/,/g, "")) /
                      Math.pow(10, 12)}
                </Typography>
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
        open={isFinished}
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
