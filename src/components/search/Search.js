import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  icon: {
    color: "black",
    fontWeight: "bold",
    fontSize: "80px",
    marginRight: "15px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },

  formCointainer: {
    alignItems: "center",
    margin: "auto",
  },
  search: {
    padding: "10px",
  },
}));

export default function Search({ setingTrack }) {
  const [track, setTrack] = useState("");
  const setedTrack = () => {
    setingTrack(track);
  
    
  };

  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <div className={classes.title}>
          <div className={classes.icon}>
            <i className="fa fa-music" aria-hidden="true"></i>
          </div>
          <h1
            style={{
              color: "black",
              fontSize: "2.3rem",
              fontFamily: "Roboto Condensed ",
            }}
          >
            Search For A Song
          </h1>
        </div>
        <p style={{ fontSize: "1.5rem" }}>Get the Lyrics Of Any Songs</p>
        <form noValidate autoComplete="off" className={classes.formCointainer}>
          <TextField
            id="outlined-full-width"
            // style={{
            //   margin: 8,

            //   padding: "5px",
            // }}
            value={track}
            onChange={(e) => {
              setTrack(e.target.value);
            }}
            placeholder="Please Enter the Title Of the song..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <Button
            type="button"
            onClick={setedTrack}
            variant="contained"
            color="primary"
            fullWidth
          >
            Get Tracks
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
