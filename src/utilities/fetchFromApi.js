import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,

  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c2de8a7ddamsh921dd7a688180cap12fce0jsn23715cc14bac",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// function to fetch the data according to its url (i.e searchParams,videoID and so on....)
export const fetchFromApi = async (url) => {
  // we get the response and we are destructuring it
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
