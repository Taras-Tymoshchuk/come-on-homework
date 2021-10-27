import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { selectorGetGames } from "../../redux/game-service/selector";
import { getGames } from "../../redux/game-service/actions";
import { connect } from "react-redux";
import s from "./style.module.scss";

const GamesList = ({ activeFilter, search, games, getGames }) => {
  const [allGames, setAllGames] = useState([]);

  const pullData = async () => {
    await getGames();
  };

  useEffect(() => {
    pullData();
  }, []);

  useEffect(() => {
    setAllGames(
      games.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) &&
          item.categoryIds.includes(activeFilter.id)
      )
    );
  }, [search, activeFilter, games]);

  return (
    <div className={s.gamesTable}>
      <h1>Games</h1>
      <hr />
      {!!allGames.length ? (
        <>
          {allGames.map((item) => {
            return (
              <div>
                <div className={s.gamesCard} key={item.code}>
                  <img src={item.icon} alt={item.name} />
                  <div className={s.gamesCard_text}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Link to={`/games/${item.code}`}>PLAY</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h1>No games found</h1>
      )}
    </div>
  );
};

const mapStateToProps = (store) => ({
  games: selectorGetGames(store),
});

const mapDispatchToProps = {
  getGames,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GamesList);
