import { Stack, Typography } from "@mui/material";
import GymIcon from "../assets/icons/gym.png";

const BodyPartCard = ({
  bodyPart,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  return (
    <Stack
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      gap={5}
      width={270}
      height={280}
      bgcolor="#fff"
      sx={{
        cursor: "pointer",
        borderTop: bodyPart === selectedBodyPart && "4px solid #ff2625",
      }}
      onClick={() => setSelectedBodyPart(bodyPart)}
    >
      <img src={GymIcon} alt="gym" width={40} height={40} />
      <Typography
        fontSize={24}
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {bodyPart}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
