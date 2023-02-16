import { NextLinkComposed } from "@/components/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  IconButton,
  Slider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface AwardProps {}

const MAX_POINTS = 10;
const DEFAULT_POINTS = 5;
const PAGE_TITLE = "⭐ Award points";
const ACTION_LABEL = "Award points";

const SUCCESS_MESSAGE = "Points awarded correctly!";
const ERROR_MESSAGE = "An error occured, please try again";

// TODO: Use transaction to send to contract
const Award: React.FC<AwardProps> = () => {
  const [recipient, setRecipient] = useState("");
  const [points, setPoints] = useState(DEFAULT_POINTS);

  // Status management
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  // TODO: Submit transaction and remove simulation
  const handleSubmit = () => {
    console.log({ recipient, points });

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
        Send points to any other member to award them for their valuable
        contributions to the organization!
      </Typography>

      <Stack gap={2}>
        <TextField
          required
          id="recipient"
          label="👤 Recipient address"
          value={recipient}
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRecipient(event.target.value);
          }}
          disabled={isLoading}
        />

        <Stack>
          <Typography id="input-slider" gutterBottom>
            ⭐ Points
          </Typography>

          <Slider
            step={1}
            marks
            min={1}
            max={MAX_POINTS}
            defaultValue={DEFAULT_POINTS}
            aria-label="points"
            valueLabelDisplay="on"
            value={points}
            onChange={(event: Event, newValue: number | number[]) => {
              setPoints(newValue as number);
            }}
            disabled={isLoading}
          />
        </Stack>
      </Stack>

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

export default Award;
