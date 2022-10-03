import { Stack, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Stack alignItems="center">
      <Typography
        component="h2"
        color="#ff2625"
        fontWeight={600}
        fontSize={{ xs: "22px", sm: "26px" }}
        fontStyle="italic"
      >
        404 not found
      </Typography>
    </Stack>
  );
};

export default NotFound;
