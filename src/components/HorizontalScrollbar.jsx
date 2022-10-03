import { useContext } from "react";
import { Box } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <img
      src={LeftArrowIcon}
      alt="left-arrow"
      className="left-arrow"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    />
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <img
      src={RightArrowIcon}
      alt="right-arrow"
      className="right-arrow"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    />
  );
};

const HorizontalScrollbar = ({
  dataList,
  selectedBodyPart,
  setSelectedBodyPart,
  isBodyParts,
}) => {
  return (
    <Box sx={{ position: "relative", p: "20px 0" }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {dataList.map((item, index) => (
          <Box key={index} mx="35px" my={0}>
            {/* Check to render "BodyPartCard" or "ExerciseCard" */}
            {isBodyParts ? (
              <BodyPartCard
                bodyPart={item}
                selectedBodyPart={selectedBodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
