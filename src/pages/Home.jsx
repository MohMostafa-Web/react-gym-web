import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import { fetchExercisesData } from "../fetchData";

const Home = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  /* using useEffect() to get bodyParts List at initial render */
  useEffect(() => {
    /* Create async function to get BodyParts List */
    const getBodyPartList = async () => {
      /* Get data from Rapid API Server */
      const bodyPartListData = await fetchExercisesData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
      );

      if (bodyPartListData) {
        // console.log(bodyPartListData); // debug
        setBodyParts(["all", ...bodyPartListData]); // Update "bodyParts" state
      }
    };

    getBodyPartList();
  }, []);

  return (
    <Box px={2}>
      {/* Hero Banner */}
      <HeroBanner />
      {/* Search Your Exercises */}
      <SearchExercises
        exercises={exercises}
        setExercises={setExercises}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      {/* Horizontal Scrollbar for Bodyparts */}
      <HorizontalScrollbar
        dataList={bodyParts}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
        isBodyParts
      />
      {/* Showing Exercises */}
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
      />
    </Box>
  );
};

export default Home;
