import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { fetchExercisesData } from "../fetchData";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const SearchExercises = ({ setExercises, setSelectedBodyPart }) => {
  const [searchInput, setSearchInput] = useState("");

  /* using "useMediaQuery()" from MUI to change button style */
  const isAboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  /* Create async function to handle Search according to searchInput */
  const handleSearch = async () => {
    if (searchInput) {
      /* Get data from Rapid API Server */
      const exercisesData = await fetchExercisesData(
        "https://exercisedb.p.rapidapi.com/exercises"
      );
      
      /* Filter exercises by matching Search Input value with any property value of exercise */
      const searchedExercises = exercisesData.filter((exercise) => {
        return ["bodyPart", "equipment", "name", "target"].some((item) =>
          exercise[item].includes(searchInput.toLowerCase())
        );
      });

      if (searchedExercises) {
        // console.log(searchedExercises); // debug
        setExercises(searchedExercises); // Update "exercises" state
        setSelectedBodyPart(""); // Remove any selection of bodypart
      } else {
        setExercises([]); // Empty "exercises" state
      }

      setSearchInput(""); // Empty Search Input
    }
  };

  return (
    <Box mt="50px">
      <Typography
        component="h2"
        textAlign="center"
        fontWeight={700}
        fontSize={{ xs: 26, sm: 30, lg: 44 }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      {/* Search Input Field */}
      <Stack direction="row" px={2} mx="auto" my={3} maxWidth={800}>
        <ThemeProvider theme={theme}>
          <TextField
            sx={{ flex: 1 }}
            label="Search Exercises"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </ThemeProvider>
        {/* Toggle between Button and Icon  */}
        {isAboveSmallScreen ? (
          <Button
            variant="contained"
            color="error"
            sx={{
              bgcolor: "#ff2625",
              width: { xs: 120, md: 140 },
              fontSize: { xs: 16, md: 18 },
              textTransform: "capitalize",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        ) : (
          <IconButton
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              borderRadius: 1,
              "&:hover": {
                bgcolor: "#c62828",
              },
            }}
            size="large"
            onClick={handleSearch}
          >
            <SearchIcon fontSize="inherit" />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

export default SearchExercises;
