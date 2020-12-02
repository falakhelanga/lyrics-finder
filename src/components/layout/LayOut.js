import React, { useReducer, useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Search from "../search/Search";
import axios from "axios";
import Spinner from '../spinner/Spinner'

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TrackLists from "../tracks/TrackLists";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  main: {
    marginTop: "55px",
  },
}));

// const initialState = {
//   tracks: [],
//   name: "yyy",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "getTracks":
//       return {
//         ...state,
//         tracks: action.value,
//       };

//     default:
//       return state;
//   }
// };

export default function LayOut() {
  // const [tracks, dispatch] = useReducer(reducer, initialState);
  const [tracks, setTracks] = useState([]);
  const [trackTitle, setTrackTitle] = useState(''); 
  const [loading, setLoading]= useState(false)

  const setingTrack = (track)=>{
      setTrackTitle(track)
    
  }
  useEffect(() => {
     setLoading(true)
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=fc36ed4a76f9220a50d6f3b1397f7466`
      )
      .then((res) => {
        console.log(res.data.message.body.track_list);
        setTracks([...res.data.message.body.track_list]);
        setLoading(false)
      })
      .catch((err) => {
          setLoading(false)
        console.log(err);
      });
  }, [trackTitle]);
  const classes = useStyles();
  return (
    <div>
     
      <CssBaseline />
      <Container maxWidth="lg" className={classes.main}>
        <Grid container>
          <Search setingTrack={setingTrack} />
          {loading ? <Spinner /> : <TrackLists tracks={tracks} />}
        </Grid>
      </Container>
    </div>
  );
}
