import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import useMovieStore from "../stores/movieStore";

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const getSingleMovie = useMovieStore((state) => state.getSingleMovie);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const movie = await getSingleMovie(Number(params.id));
      setMovie(movie);
    } catch (err) {
      console.error(err);
    }
  }

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <CardMedia
        sx={{ width: '100%', height: 450 }}
        image={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        title={movie.title}
      />

      <Box maxWidth={600} margin='auto'>
        <Box display="flex">
          <Card style={{ width: 250, position: 'relative', top: -100 }}>
            <CardMedia
              sx={{ width: '100%', height: 300 }}
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
            />
          </Card>

          <Box padding={4}>
            <Typography variant="subtitle2">
              Rating
            </Typography>
            <Typography variant="h6" marginBottom={2}>
              {movie.vote_average}
            </Typography>
          </Box>
        </Box>

        <Box position="relative" top={-70} marginBottom={4}>
          <Typography variant="h3" marginBottom={4}>
            {movie.title}
          </Typography>

          <Typography variant="body1">
            {movie.overview}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default MoviePage;
