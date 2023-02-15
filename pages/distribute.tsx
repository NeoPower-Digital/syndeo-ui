import { NextLinkComposed } from "@/components/Link";
import useQuery from "@/hooks/useQuery";
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

const PAGE_TITLE = "💸 Distribute rewards";

// TODO: Use transaction to send to contract
const Distribute: React.FC<DistributeProps> = () => {
  const { points, awardedMembers, funds } = useQuery();

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

  const handleClick = () => {
    // TODO: Submit transaction
    console.log("DISTRIBUTE!");
  };

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2}>
        <IconButton component={NextLinkComposed} to={{ pathname: "/" }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h4">{PAGE_TITLE}</Typography>
      </Stack>

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

      <Button variant="contained" onClick={handleClick}>
        Distribute rewards
      </Button>
    </Stack>
  );
};

export default Distribute;
