import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    flex: "1",
  },
}));

function Files() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const auth = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch({ type: "LOGOUT" });
    history.push("/auth");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div
        style={{
          height: "64px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          zIndex: -2,
        }}
      />
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap to={"/"} className={classes.logo}>
            Material World
          </Typography>
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="default"
          >
            Sign In
          </Button>
          <Button variant="contained" color="default" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Files;
