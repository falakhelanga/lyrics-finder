import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Spinner from '../spinner/Spinner'
export default function Lyrics(props) {
  const [lyric, setLyric] = useState({});
  const [loading,setLoading] = useState(false)
  useEffect(() => {
      setLoading(<i class="fas fa-tire-rugged    "></i>)
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=fc36ed4a76f9220a50d6f3b1397f7466`
      )
      .then((res) => {
          setLoading(false)
          setLyric(res.data.message.body.lyrics)
        console.log(res.data.message.body.lyrics);
      })
      .catch((err) => {
          setLoading(false)
        console.log(err);
      });
  }, []);

 

  const contents = loading ? <Spinner/> : (
      <div>
          <Button

              type='button'
              onClick={
                  () => {

                      props.history.goBack()
                  }
              }
              variant="contained"
              style={{
                  backgroundColor: "rgb(52,58,64)",
                  color: "white",
              }}
          >
              Go Back
        </Button>
          <Grid
              container
              style={{
                  marginTop: "15px",
              }}
          >
              <Grid item xs={12}>
                  <div
                      style={{
                          display: "flex",
                          backgroundColor: "rgb(247,247,247)",
                          height: "30px",
                          width: "100%",
                          borderRadius: "5px 5px 0 0",
                          boxShadow: "0 0 2px rgba(0,0,0,0.7)",
                          alignItems: "center",
                          padding: " 3px 0",
                      }}
                  >
                      <h2
                          style={{
                              marginLeft: "25px",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                          }}
                      >
                          my future by{" "}
                          <span
                              style={{
                                  color: "rgb(108,117,145)",
                              }}
                          >
                              Billie Eilish
                </span>
                      </h2>
                  </div>
              </Grid>
              <Grid item xs={12}>
                  <div
                      style={{
                          padding: "0 0 20px 0",
                          width: "100%",
                          borderRadius: " 0 0 5px 5px",
                          boxShadow: "0 0 2px rgba(0,0,0,0.7)",
                          border: "1px solid rgb(247,247,247)",
                      }}
                  >
                      <p
                          style={{
                              marginLeft: "25px",
                          }}
                      >
                          {lyric.lyrics_body}
                      </p>
                  </div>
              </Grid>

              <Grid item xs={12}>
                  <div
                      style={{
                          marginTop: "15px",
                          display: "flex",
                          border: "1px solid rgb(223,223,223)",
                          height: "30px",
                          width: "100%",

                          border: "1px solid rgb(247,247,247)",
                          alignItems: "center",
                          padding: " 10px 0",
                      }}
                  >
                      <h2
                          style={{
                              marginLeft: "25px",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                          }}
                      >
                          Album ID:{" "}
                          <span
                              style={{
                                  color: "rgb(108,117,145)",
                              }}
                          >
                              39297818
                </span>
                      </h2>
                  </div>

                  <Grid item xs={12}>
                      <div
                          style={{
                              display: "flex",

                              height: "30px",
                              width: "100%",
                              border: "1px solid rgb(223,223,223)",

                              alignItems: "center",
                              padding: " 10px 0",
                          }}
                      >
                          <h2
                              style={{
                                  marginLeft: "25px",
                                  fontWeight: "bold",
                                  textTransform: "capitalize",
                              }}
                          >
                              Song Genre:{" "}
                              <span
                                  style={{
                                      color: "rgb(108,117,145)",
                                  }}
                              >
                                  Music
                  </span>
                          </h2>
                      </div>
                  </Grid>
                  <Grid item xs={12}>
                      <div
                          style={{
                              display: "flex",

                              height: "30px",
                              width: "100%",
                              border: "1px solid rgb(223,223,223)",

                              alignItems: "center",
                              padding: " 10px 0",
                          }}
                      >
                          <h2
                              style={{
                                  marginLeft: "25px",
                                  fontWeight: "bold",
                                  textTransform: "capitalize",
                              }}
                          >
                              Explicit Words:{" "}
                              <span
                                  style={{
                                      color: "rgb(108,117,145)",
                                  }}
                              >
                                  No
                  </span>
                          </h2>
                      </div>
                  </Grid>
                  <Grid item xs={12}>
                      <div
                          style={{
                              display: "flex",

                              height: "30px",
                              width: "100%",
                              border: "1px solid rgb(223,223,223)",

                              alignItems: "center",
                              padding: " 10px 0",
                          }}
                      >
                          <h2
                              style={{
                                  marginLeft: "25px",
                                  fontWeight: "bold",
                                  textTransform: "capitalize",
                              }}
                          >
                              Release Date:{" "}
                              <span
                                  style={{
                                      color: "rgb(108,117,145)",
                                  }}
                              >
                                  08/08/2020
                  </span>
                          </h2>
                      </div>
                  </Grid>
              </Grid>
          </Grid>
      </div>

  )
  return (
      
         
      
    <Container
      maxWidth="lg"
      style={{
        marginTop: "15px",
      }}
    >
     {contents}
    </Container>
  );
}
