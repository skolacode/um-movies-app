import { useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import useMovieStore from '../stores/movieStore';

const HomePage = () => {
  const popularMovies = useMovieStore((state) => state.popularMovies);
  const getPopularMovies = useMovieStore((state) => state.getPopularMovies);

  useEffect(() => {
    if (popularMovies.length === 0) {
      fetchPopularMovies();
    }
  }, []);

  const fetchPopularMovies = async () => {
    try {
      await getPopularMovies();
      return 'success';
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <MoviesList
      movies={popularMovies}
      title="Popular Movies"
    />
  );
};

export default HomePage;
