import "./App.css";
import { Route } from "react-router-dom";
import Detail from "./Components/Detail";
import Home from "./vistas/Home";
import Form from "./Components/Form";
import MyOwnDogs from "./Components/MyOwnDogs";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Landing />
      </Route>

      <div>
        <Route exact path={"/form"}>
          <Form />
        </Route>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default App;
