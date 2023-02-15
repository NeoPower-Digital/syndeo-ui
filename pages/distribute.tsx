import { NextLinkComposed } from "@/components/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

interface DistributeProps {}

const PAGE_TITLE = "Distributed rewards";

// TODO: Use transaction to send to contract
const Distribute: React.FC<DistributeProps> = () => {
  const points = 250;
  const awardedMembers = 15;
  const funds = 6000;

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2}>
        <IconButton component={NextLinkComposed} to={{ pathname: "/" }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4">{PAGE_TITLE}</Typography>
      </Stack>

      <Card>
        <CardContent>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h2">⭐</Typography>

            <Stack>
              <Typography variant="h4">{points}</Typography>
              <Typography variant="h5" color="text.secondary">
                Points assigned
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h2">👤</Typography>

            <Stack>
              <Typography variant="h4">{awardedMembers}</Typography>
              <Typography variant="h5" color="text.secondary">
                Members rewarded
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h2">💰</Typography>

            <Stack>
              <Typography variant="h4">
                {Intl.NumberFormat("en").format(funds)}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Funds
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Button variant="contained">Distribute rewards</Button>
    </Stack>
  );
};

export default Distribute;
