import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MediaCard from "./MediaCard";

const MoviesList = ({ movies, title }) => {
  return (
    <Box padding={4}>
      <Typography variant='h3' marginBottom={8}>
        {title}
      </Typography>

      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item lg={2} md={3} sm={4} xs={12} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MediaCard
                title={movie.title}
                overview={movie.overview}
                posterPath={movie.poster_path}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default MoviesList;
