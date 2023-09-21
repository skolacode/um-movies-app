import { useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import useMovieStore from '../stores/movieStore';

const UpcomingMoviesPage = () => {
  const upcomingMovies = useMovieStore((state) => state.upcomingMovies);
  const getUpcomingMovies = useMovieStore((state) => state.getUpcomingMovies);

  useEffect(() => {
    if (upcomingMovies.length === 0) {
      fetchUpcomingMovies();
    }
  }, []);

  const fetchUpcomingMovies = async () => {
    try {
      await getUpcomingMovies();
      return 'success';
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <MoviesList
      movies={upcomingMovies}
      title="Upcoming Movies"
    />
  );
};

export default UpcomingMoviesPage;
