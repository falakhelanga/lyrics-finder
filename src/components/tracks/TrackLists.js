import React from "react";
import Grid from "@material-ui/core/Grid";
import TrackList from "./TrackList";

export default function TrackLists(props) {
  return (
    <Grid item xs={12}>
      <div
        style={{
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto Condensed ",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          search result
        </h1>
      </div>

      <Grid container spacing={3}>
        {props.tracks.map((curr,index) => {
          // {track_id,track_name,ulbum_name,artist_name} = curr
          return (
            <TrackList
              key={curr.track.track_id}
              track_name={curr.track.track_name}
              ulbum_name={curr.track.ulbum_name}
              artist_name={curr.track.artist_name}
              id={curr.track.track_id}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
