import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchYoutubeData } from "../fetchData";
import Loader from "./Loader";

const ExerciseVideos = ({ name }) => {
  const [videos, setVideos] = useState([]);

  /* using useEffect() to get the Exercise videos according to the exercise name */
  useEffect(() => {
    const getExerciseVideos = async () => {
      if (name) {
        /* Get data from Rapid API Server */
        const theExerciseVideos = await fetchYoutubeData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`
        );
        // console.log(theExerciseVideos); // debug
        setVideos(theExerciseVideos.contents);
      }
    };
    getExerciseVideos();
  }, [name]);

  return (
    <Box pt={{ xs: "50px", lg: "120px" }} px="20px">
      <Typography
        variant="h4"
        fontWeight={700}
        fontSize={{ xs: "30px", lg: "35px" }}
      >
        Watch{" "}
        <Typography
          variant="caption"
          color="#ff2625"
          fontSize="inherit"
          fontWeight="inherit"
          textTransform="capitalize"
        >
          {name}
        </Typography>{" "}
        exercise videos
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        alignItems="center"
        gap="80px"
        mt="30px"
      >
        {videos.length ? (
          videos?.slice(0, 6).map((item) => {
            const {
              video: { channelName, title, thumbnails, videoId },
            } = item;
            return (
              // Exercise Video
              <a
                key={videoId}
                href={`https://youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    width: { xs: "290px", md: "380px" },
                    height: "202px",
                    borderRadius: "15px 0 0 0",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={thumbnails[0].url}
                    alt={title}
                    loading="lazy"
                    style={{ width: "100%" }}
                  />
                </Box>
                <Typography fontSize={22} fontWeight={700} mt={2} title={title}>
                  {title.length > 23 ? `${title.slice(0, 23)}..` : title}
                </Typography>
                <Typography fontSize={14} fontWeight={300} color="#777">
                  {channelName}
                </Typography>
              </a>
            );
          })
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
