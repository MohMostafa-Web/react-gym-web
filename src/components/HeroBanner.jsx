import { Box, Typography, Button } from "@mui/material";
import BannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        ml: { sm: "50px" },
        mt: { xs: "70px", lg: "212px" },
      }}
    >
      <Typography component="h2" color="#ff2625" fontWeight={600} fontSize={{xs: "22px", sm: "26px"}}>
        Fitness Club
      </Typography>
      <Typography
        component="h3"
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: "40px", lg: "44px" }}
        mt="30px"
        mb="23px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize={{xs: "18px", sm: "22px"}} mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        size="large"
        sx={{ bgcolor: "#ff2625", p: "10px 15px", textTransform: "capitalize" }}
      >
        Explore Exercies
      </Button>
      <Typography
        component="h4"
        fontWeight={600}
        fontSize={200}
        sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
      >
        Exercise
      </Typography>
      {/* Banner Image */}
      <img className="hero-banner-img" src={BannerImg} alt="banner" />
    </Box>
  );
};

export default HeroBanner;
