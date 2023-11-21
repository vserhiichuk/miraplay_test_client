import { useQuery } from "react-query";
import { Navbar } from "../Navbar";
import { useState } from "react";
import { fetchGamesByPage } from "../../api/gamesApi";
import { Loader } from "../Loader";
import GamesList from "../GamesList/GamesList";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./Main.scss";

const categories = [
  "ALL",
  "FREE",
  "MOBA",
  "SHOOTERS",
  "LAUNCHERS",
  "MMORPG",
  "STRATEGY",
  "FIGHTING",
  "RACING",
  "SURVIVAL",
  "ONLINE",
];

export const Main = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(false);
  const [gamesData, setGamesData] = useState([]);
  const [gamesDataLength, setGamesDataLength] = useState(0);

  const { isLoading, isFetching, error } = useQuery(
    ["gamesData", category, page],
    async () => {
      try {
        const responseData = await fetchGamesByPage(page, category);
        setGamesData((prevState) => [
          ...prevState,
          ...responseData.games.slice(prevState.length),
        ]);
        setGamesDataLength(responseData.gamesListLength);

        return responseData;
      } catch (error) {
        throw error;
      }
    }
  );
  console.log(isFetching);

  const handleShowMoreClick = (event) => {
    event.preventDefault();

    setPage((prevState) => prevState + 1);
  };

  const handleCategory = (clickedCategory) => {

    if (category !== clickedCategory) {
        setCategory(clickedCategory);
        setPage(1);
        setGamesData([]);
      }
  };

  return (
    <div className="main">
      <Navbar />

      <div className="games">
        <h1 className="games__title">ВСІ ІГРИ</h1>

        <div className="games__categories">
          {categories.map((item) => {
            const formatCategory = item === 'ALL' ? false : item

            return (
              <CategoryButton
                key={item}
                cat={item}
                isActive={category === formatCategory}
                onClick={() => handleCategory(formatCategory)}
              />
            )
          })}
        </div>

        {(isLoading || isFetching) && <Loader />}
        {error && <div>Error: {error.message}</div>}

        {gamesData.length && <GamesList gamesData={gamesData} />}

        {gamesData.length < gamesDataLength && (
          <button
            type="button"
            onClick={handleShowMoreClick}
            className="games__button"
          >
            Показати ще
          </button>
        )}
      </div>
    </div>
  );
};
