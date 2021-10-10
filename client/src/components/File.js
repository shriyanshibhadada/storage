import { useSelector } from "react-redux";
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import { deleteFiles } from "../actions/files";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function File(props) {
  const files = useSelector((state) => state.files);
  const item = files[props.index];
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickDelete = (e) => {
    e.preventDefault();
    dispatch(deleteFiles(item._id));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={item.file}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography>asdfghjkuygvcdsergh</Typography>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            color="secondary"
            variant="outlined"
            fullWidth
            onClick={handleClickDelete}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default File;
