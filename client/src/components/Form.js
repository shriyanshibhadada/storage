import React from "react";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createFiles } from "../actions/files";

import { Button, TextField, Grid, Paper, CssBaseline } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { PublishOutlined } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Form() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createFiles({ title, file }));
    setTitle("");
    setFile("");
  };

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
      <Grid container justifyContent="center" className={classes.image}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PublishOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Upload file
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Title"
                autoComplete="Title"
                autoFocus
                id="outlined-basic"
                value={title}
                onChange={handleChangeTitle}
                label="Title"
              />
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => {
                    setFile(base64);
                  }}
                />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.submit}
              >
                Upload
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Form;
