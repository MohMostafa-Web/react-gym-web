import axios from "axios";

/* Create function to fetch data from RapidAPI "ExercisesDB" */
export const fetchExercisesData = async (url) => {
  const options = {
    method: "GET",
    url,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_EXERCISE_DB_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response); // debug
    return response.data;
  } catch (err) {
    console.log(err.message); // debug
  }
};

/* Create function to fetch data from RapidAPI "Youtube Search and Download" */
export const fetchYoutubeData = async (url) => {
  const options = {
    method: "GET",
    url: `${url}`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_SEARCH_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response); // debug
    return response.data;
  } catch (err) {
    console.log(err.message); // debug
  }
};
