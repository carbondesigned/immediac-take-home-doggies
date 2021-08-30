import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./Pages/Home";
import DogPage from "./Pages/DogPage";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const PROXY_API = "https://pacific-basin-04659.herokuapp.com";

  const getDogs = async () => {
    await axios
      .get(`${PROXY_API}/https://frontenddev2021.azurewebsites.net/dogs`)
      .then((res) => {
        if (!res.data) {
          setLoading(true);
        }
        setDogs(res.data.dogs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home loading={loading} dogs={dogs} />
          </Route>
          <Route path="/:dog">
            <DogPage loading={loading} dogs={dogs} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
