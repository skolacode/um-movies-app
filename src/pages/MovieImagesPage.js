import { useParams } from "react-router-dom";
import https from "../utils/https";
import { useEffect, useState } from "react";
import { Card, CardMedia, Grid } from "@mui/material";

const MovieImagesPage = () => {
  const params = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const resp = await https.get(`/movie/${params.id}/images`);
      setImages(resp.data.backdrops);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Grid container spacing={2} padding={4}>
      {images.map((image) => (
        <Grid item xs={3} key={image.file_path}>
          <Card>
            <CardMedia
              style={{ width: '100%', height: 200 }}
              image={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieImagesPage;
