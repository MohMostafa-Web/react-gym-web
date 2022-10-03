import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseDetails from "../components/ExerciseDetails";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { fetchExercisesData } from "../fetchData";

const Exercise = () => {
  const [theExercise, setTheExercise] = useState({});
  const { id } = useParams();

  /* using useEffect() to get the Exercise By Id at initial render or if Id is changed */
  useEffect(() => {
    const getExerciseById = async () => {
      /* Get data from Rapid API Server */
      const theExerciseData = await fetchExercisesData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
      );
      // console.log(theExerciseData); // debug
      setTheExercise(theExerciseData);
    };
    getExerciseById();
  }, [id]);

  return (
    <Box>
      <ExerciseDetails theExercise={theExercise} />
      <ExerciseVideos name={theExercise.name} />
      <SimilarExercises
        target={theExercise.target}
        equipment={theExercise.equipment}
      />
    </Box>
  );
};

export default Exercise;
