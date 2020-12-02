import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "15px",
  },
}));
export default function TrackList({track_name,artist_name,ulbum_name,id}) {
  const classes = useStyles();

  return (
    <Grid item xm={12} md={6} style={{
      width:'100%'
    }}>
      <Paper className={classes.paper}>
        <div style={{ textAlign: "left" }}>
          <h2
            style={{
              fontFamily: "Roboto Condensed ",

              textTransform: "capitalize",
              color: "black",
            }}
          >
            {artist_name}
          </h2>
          <div style={{ color: "black" }}>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              <i className="fas fa-play"></i>
              Track
            </span>
            : <span>{track_name}</span>
          </div>
          <div style={{ color: "black" }}>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              <i className="fas fa-compact-disc"></i>
              Ulbum
            </span>
            : <span>{ulbum_name}</span>
          </div>
        </div>
        <Link to = {`/Lyrics/${id}`} variant="contained" fullWidth style={{
                  backgroundColor: 'rgb(52,58,64)',
                  color:'white',
                  fontWeight:'bold',
                  marginTop: '6px'
                   
              }}
            > <i className="fas fa-greater-than" style={{
                marginRight:'3px'
            }}></i>view lyrics</Link>

      </Paper>
    </Grid>
  );
}
