import { Link } from "react-router-dom";
import { Chip, Stack, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ExerciseCard = ({ exercise }) => {
  const { id, bodyPart, gifUrl, name, target } = exercise;

  const theme = createTheme({
    palette: {
      error: {
        main: "#ffa9a9",
      },
      warning: {
        main: "#fcc757",
      },
    },
  });

  return (
    <Link
      to={`/exercise/${id}`}
      className="exercise-card"
      onClick={() => window.scrollTo({ top: 72, scrollBehavior: "smooth" })}
    >
      <img src={gifUrl} alt={name} loading="lazy" />
      <Stack direction="row" gap="21px" px="21px">
        <ThemeProvider theme={theme}>
          <Chip
            label={bodyPart}
            color="error"
            clickable
            sx={{
              color: "#fff",
              fontSize: 14,
              p: 1,
              textTransform: "capitalize",
            }}
          />
          <Chip
            label={target}
            color="warning"
            clickable
            sx={{
              color: "#fff",
              fontSize: 14,
              p: 1,
              textTransform: "capitalize",
            }}
          />
        </ThemeProvider>
      </Stack>
      <Typography
        variant="subtitle1"
        mt="20px"
        px="21px"
        pb="10px"
        fontWeight="bold"
        fontSize={{ xs: 18, md: 20, lg: 24 }}
        textTransform="capitalize"
        title={name}
      >
        {name.length > 23 ? `${name.slice(0, 23)}..` : name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
