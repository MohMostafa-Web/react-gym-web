import { useEffect, useState } from "react";
import {
  Box,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { fetchExercisesData } from "../fetchData";
import ExerciseCard from "./ExerciseCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff2625",
    },
  },
});

const Exercises = ({ exercises, setExercises, selectedBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const numExsPerPage = 10; // Number of Exercises per Page
  const firstIndexInPage = numExsPerPage * (currentPage - 1); // 0, 10, 20, ..

  /* using "useMediaQuery()" from MUI to control number of visible pages */
  const isAboveSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

  /* using useEffect to get the selected exercises according to the selected body part */
  useEffect(() => {
    const getSelectedExercises = async () => {
      let exercisesData = [];

      if (selectedBodyPart) {
        // Check if selectedBodyPart is not empty // Note: it will be empty when the user searches
        if (selectedBodyPart === "all") {
          /* Get data from Rapid API Server */
          exercisesData = await fetchExercisesData(
            `https://exercisedb.p.rapidapi.com/exercises`
          );
        } else {
          /* Get data from Rapid API Server */
          exercisesData = await fetchExercisesData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`
          );
        }
        setExercises(exercisesData); // Update "exercises" state
      }
      setCurrentPage(1); // Make the first page as default
    };

    getSelectedExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBodyPart]);

  /* Create function to handle changing in the page number */
  const handlePageChange = (e, value) => {
    setCurrentPage(value);
    window.scroll({ top: 1600, behavior: "smooth" });
  };

  return (
    <Box id="exercises" p="20px" mt={{ xs: "50px", lg: "110px" }}>
      <Typography
        variant="h3"
        mb="45px"
        fontSize={{ xs: "2.5rem", md: "3rem" }}
      >
        Showing Results
      </Typography>
      {/* Exercises List */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ xs: 6, lg: 12 }}
      >
        {exercises.length ? (
          // Showing exercises according the selected page
          exercises
            .slice(firstIndexInPage, firstIndexInPage + numExsPerPage)
            .map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))
        ) : (
          <Typography
            color="error"
            fontWeight="500"
            fontSize={18}
            fontStyle="italic"
          >
            No Matched Found
          </Typography>
        )}
      </Stack>
      {/* Pagination */}
      <Stack direction="row" justifyContent="center" mt={6}>
        <ThemeProvider theme={theme}>
          {exercises.length > numExsPerPage && (
            <Pagination
              sx={{
                ".MuiButtonBase-root": {
                  xs: { minWidth: "25px", height: "25px" },
                  sm: { minWidth: "32px", height: "32px" },
                },
              }}
              count={Math.ceil(exercises.length / numExsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              siblingCount={isAboveSmallScreen}
            />
          )}
        </ThemeProvider>
      </Stack>
    </Box>
  );
};

export default Exercises;
