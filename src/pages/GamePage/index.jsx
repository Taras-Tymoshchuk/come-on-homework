import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { selectorGetGames } from "../../redux/game-service/selector";
import { getGames } from "../../redux/game-service/actions";
import { connect } from "react-redux";
import s from "./style.module.scss";
import { Button } from "@material-ui/core";

const GamePage = ({ games, getGames }) => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  const pullData = async () => {
    await getGames();
    const search = window.location.pathname.split("/");
    const currGame = search.pop();
    if (games.some((game) => game.code === currGame) && window.comeon) {
      window.comeon.game.launch(currGame);
    } else {
      history.push("/games");
    }
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
    } else {
      pullData();
    }
  }, []);
  const handleGetBack = () => {
    history.goBack();
  };

  return (
    <div className={s.gamePage}>
      <Button onClick={() => handleGetBack()}>GO TO MAIN PAGE</Button>
      <div id="game-launch"></div>;
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

export default connector(GamePage);
