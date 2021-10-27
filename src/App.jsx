import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AllGamesPage } from "./pages/AllGamesPage/index";
import { Route, Switch } from "react-router-dom";
import { Login } from "./pages/LoginPage/index";
import GamePage from "./pages/GamePage/index";
import "../src/style/main.scss";

const App = () => {
  const history = useHistory();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/games/:id" component={() => <GamePage />} />
        <Route exact path="/games" component={() => <AllGamesPage />} />
        <Route exact path="/" component={() => <Login />} />
      </Switch>
    </>
  );
};

export default App;
