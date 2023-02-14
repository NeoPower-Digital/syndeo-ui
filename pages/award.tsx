import {
  Button,
  IconButton,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NextLinkComposed } from "@/components/Link";

interface AwardProps {}

const MAX_POINTS = 10;
const DEFAULT_POINTS = 5;
const PAGE_TITLE = "Award";
const ACTION_LABEL = "Award points";

const Award: React.FC<AwardProps> = () => {
  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2}>
        <IconButton component={NextLinkComposed} to={{ pathname: "/" }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h3">{PAGE_TITLE}</Typography>
      </Stack>

      <Stack gap={2}>
        <TextField required id="recipient" label="Recipient" />

        <Stack>
          <Typography id="input-slider" gutterBottom>
            Points
          </Typography>

          <Slider
            step={1}
            marks
            min={1}
            max={MAX_POINTS}
            defaultValue={DEFAULT_POINTS}
            aria-label="points"
            valueLabelDisplay="on"
          />
        </Stack>
      </Stack>

      <Button variant="contained">{ACTION_LABEL}</Button>
    </Stack>
  );
};

export default Award;
