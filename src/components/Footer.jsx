import { Box, Link, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="40px" pt="24px" pb="30px" textAlign="center" bgcolor="#fff2db">
      <img src={Logo} alt="Gold's Gym Logo" />
      <Typography mt={1.75} mb={1} fontWeight={600} fontSize={14}>
        Desgined by{" "}
        <Link
          href="https://www.youtube.com/c/JavaScriptMastery"
          target="_blank"
          rel="noreferrer"
          underline="none"
          color="inherit"
          sx={{
            "&:hover": {
              opacity: 0.9
            }
          }}
        >
          JavaScript Mastery
        </Link>{" "}
        with ❤️
      </Typography>
      <Typography fontWeight={600} fontSize={14}>
        Coded by{" "}
        <Link
          href="https://github.com/MohMostafa-Web"
          target="_blank"
          rel="noreferrer"
          underline="none"
          color="inherit"
          sx={{
            "&:hover": {
              opacity: 0.9
            }
          }}
        >
          MoMostafa
        </Link>{" "}
        with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
