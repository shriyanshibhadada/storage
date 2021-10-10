import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFiles } from "./actions/files";
import { makeStyles } from "@material-ui/core/styles";
import Auth from "./components/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#DFDBE5",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
}));
// https://material-dashboard-free.surge.sh

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFiles());
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
