import { NextLinkComposed } from "@/components/Link";
import useTransaction from "@/hooks/useTransaction";
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
import { useRef, useState } from "react";

interface AwardProps {}

const MAX_POINTS = 10;
const DEFAULT_POINTS = 5;
const PAGE_TITLE = "⭐ Award points";
const ACTION_LABEL = "Award points";

const SUCCESS_MESSAGE = "Points awarded correctly!";
const ERROR_MESSAGE = "An error occured, please try again";

const Award: React.FC<AwardProps> = () => {
  const recipient = useRef("");
  const points = useRef(DEFAULT_POINTS);

  // Status management
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isError, setIsError] = useState(false);
  const { send } = useTransaction(setIsLoading, setIsFinished, setIsError);

  const handleSubmit = () => {
    console.log({ recipient: recipient.current, points: points.current });

    send("award", recipient.current, points.current);
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
        Send points to any other member to award them for their valuable
        contributions to the organization!
      </Typography>

      <Stack gap={2}>
        <TextField
          required
          id="recipient"
          label="👤 Recipient address"
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            recipient.current = event.target.value;
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
            onChange={(event: Event, newValue: number | number[]) => {
              points.current = newValue as number;
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

export default Award;
