import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchExercisesData } from "../fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ target, equipment }) => {
  const [exercisesTarget, setExercisesTarget] = useState([]);
  const [exercisesEquipment, setExercisesEquipment] = useState([]);

  /* using useEffect() to get the Exercises list by Target Muscle And Equipment */
  useEffect(() => {
    const getExercisesListByTargetAndEquipment = async () => {
      /* Get data from Rapid API Server */
      if (target && equipment) {
        const exercisesByTargetData = await fetchExercisesData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${target}`
        );
        // console.log(exercisesByTargetData); // debug
        setExercisesTarget(exercisesByTargetData);

        const exercisesByEquipmentData = await fetchExercisesData(
          `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`
        );
        // console.log(exercisesByEquipmentData); // debug
        setExercisesEquipment(exercisesByEquipmentData);
      }
    };

    getExercisesListByTargetAndEquipment();
  }, [target, equipment]);

  return (
    <Box pt={{ xs: "50px", lg: "120px" }} px="20px">
      {/* Target Muscle Exercises */}
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: "30px", lg: "35px" }}
      >
        Similar{" "}
        <Typography
          variant="caption"
          color="#ff2625"
          fontSize="inherit"
          fontWeight="inherit"
          textTransform="capitalize"
        >
          Target Muscle
        </Typography>{" "}
        exercises
      </Typography>
      {/* Horizontal Scrollbar for "List of Target Muscle Exercises" */}
      {exercisesTarget.length ? (
        <HorizontalScrollbar dataList={exercisesTarget} />
      ) : (
        <Loader />
      )}
      {/* Equipment Exercises */}
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: "30px", lg: "35px" }}
        mt="40px"
      >
        Similar{" "}
        <Typography
          variant="caption"
          color="#ff2625"
          fontSize="inherit"
          fontWeight="inherit"
          textTransform="capitalize"
        >
          Equipment
        </Typography>{" "}
        exercises
      </Typography>
      {/* Horizontal Scrollbar for "List of Equipment Exercises" */}
      {exercisesTarget.length ? (
        <HorizontalScrollbar dataList={exercisesEquipment} />
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default SimilarExercises;
