import axios from "axios";

const BASE_URL = "https://api.miraplay.cloud/games/by_page";

const fetchGamesByPage = async (page, category) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        page,
        isFreshGamesFirst: true,
        genre: category,
        gamesToShow: 9,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchGamesByPage };