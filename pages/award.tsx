import { NextLinkComposed } from "@/components/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  IconButton,
  Slider,
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

// TODO: Use transaction to send to contract
const Award: React.FC<AwardProps> = () => {
  const [recipient, setRecipient] = useState("");
  const [points, setPoints] = useState(DEFAULT_POINTS);

  const handleSubmit = () => {
    // TODO: Submit transaction
    console.log({ recipient, points });
  };

  return (
    <Stack gap={3}>
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
          />
        </Stack>
      </Stack>

      <Button variant="contained" onClick={handleSubmit}>
        {ACTION_LABEL}
      </Button>
    </Stack>
  );
};

export default Award;
