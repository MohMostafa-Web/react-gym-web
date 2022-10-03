import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack width="100%" justifyContent="center" alignItems="center">
      <InfinitySpin color="#ff2625" />
    </Stack>
  );
};

export default Loader;
