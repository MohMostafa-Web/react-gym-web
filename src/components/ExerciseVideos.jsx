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
        justifyContent="center"
        alignItems="center"
        gap={{ xs: "50px", md: "80px" }}
        mt="30px"
      >
        {videos.length ? (
          videos?.slice(0, 6).map((item) => {
            const {
              video: {
                channelName,
                title,
                thumbnails,
                videoId,
                lengthText,
                viewCountText,
                publishedTimeText,
              },
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
                    position: "relative",
                  }}
                >
                  <img
                    src={thumbnails[0].url}
                    alt={title}
                    loading="lazy"
                    style={{
                      display: "flex",
                      maxWidth: "100%",
                      width: "360px",
                      height: "202px",
                      borderRadius: "15px 0 0 0",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      padding: "0 4px",
                      borderRadius: "4px",
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                    }}
                  >
                    {lengthText}
                  </Typography>
                </Box>
                <Typography fontSize={20} fontWeight={700} mt={2} title={title}>
                  {title.length > 30 ? `${title.slice(0, 30)}..` : title}
                </Typography>
                <Typography fontSize={16} fontWeight={300} color="#777" mt="8px" title={channelName}>
                  {channelName.length > 35 ? `${channelName.slice(0, 35)}..` : channelName}
                </Typography>
                <Typography fontSize={14} fontWeight={300} color="#777">
                  {viewCountText} • {publishedTimeText}
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
