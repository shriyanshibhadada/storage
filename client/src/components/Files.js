import { useSelector } from "react-redux";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import File from "./File";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Files() {
  const files = useSelector((state) => state.files);
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {files.map((item, index) => (
            <File key={item._id} index = {index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Files;
