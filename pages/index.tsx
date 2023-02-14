import { NextLinkComposed } from "@/components/Link";
import { Button, Stack, Typography } from "@mui/material";
import { Inter } from "@next/font/google";

export default function Home() {
  return (
    <Stack gap={2}>
      <Typography variant="h3">Choose an action:</Typography>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "award" }}
      >
        ⭐ Award points ⭐
      </Button>

      <Button
        variant="contained"
        component={NextLinkComposed}
        to={{ pathname: "distribute" }}
      >
        🚀 Distribute rewards 🚀
      </Button>
    </Stack>
  );
}
