import { Stack, Typography, Button } from "@mui/material";
import BodyPartIcon from "../assets/icons/body-part.png";
import EquipmentIcon from "../assets/icons/equipment.png";
import TargetIcon from "../assets/icons/target.png";

const ExerciseDetails = ({ theExercise }) => {
  if (theExercise) {
    const { bodyPart, equipment, gifUrl, name, target } = theExercise;

    const extraListDetails = [
      { icon: BodyPartIcon, text: bodyPart },
      { icon: TargetIcon, text: target },
      { icon: EquipmentIcon, text: equipment },
    ];

    return (
      <Stack
        direction={{ lg: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", lg: "flex-start" }}
        gap={{ xs: "30px", md: "60px" }}
        pt={{ xs: "60px", md: "120px" }}
        px="20px"
      >
        {/* The Exercise Image */}
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        {/* The Exercise Content */}
        <Stack gap={{ xs: "20px", lg: "35px" }}>
          <Typography
            variant="h3"
            fontWeight={700}
            fontSize={{xs: "2.5rem", md: "3rem"}}
            textTransform="capitalize"
            mb={4}
          >
            {name}
          </Typography>
          <Typography fontWeight={500} fontSize={16} color="#666">
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best.
          </Typography>
          <Typography fontWeight={500} fontSize={16} color="#666" variant="h6">
            Exercises to target your {target}. It will help you to improve your
            mood and gain energy.
          </Typography>
          {/* Extra List Exercise */}
          <Stack gap={3}>
            {extraListDetails.map((item, index) => (
              <Stack key={index} direction="row" alignItems="center" gap="24px">
                <Button
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#fff2db",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    width="50px"
                    height="50px"
                  />
                </Button>
                <Typography fontSize="20px" textTransform="capitalize">
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return (
    <Typography
      color="#ff2625"
      py={3}
      align="center"
      fontWeight={500}
      fontSize={30}
      fontStyle="italic"
    >
      No Matched Found
    </Typography>
  );
};

export default ExerciseDetails;
