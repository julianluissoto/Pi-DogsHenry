import "./App.css";
import { Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail";
import Home from "./vistas/Home";
import Form from "./Components/Form";
import MyOwnDogs from "./Components/MyOwnDogs";
import Landing from "./Components/Landing";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Landing />
        </Route>

        <Route exact path={"/form"}>
          <Form />
        </Route>

        <Route exact path="/details/:id">
          {" "}
          <Detail />
        </Route>
        <Route exact path="/home">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path={"/myOwnDogs"}>
          <MyOwnDogs />
        </Route>
        <Route path={"/*"}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
