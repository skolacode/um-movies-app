import { create } from 'zustand'
import https from '../utils/https';

const useMovieStore = create((set, getState) => ({
  popularMovies: [],
  upcomingMovies: [],
  getPopularMovies: async () => {
    const resp = await https().get('/movie/popular');
    set({ popularMovies: [...resp.data.results] });
    return resp;
  },
  getUpcomingMovies: async () => {
    const resp = await https().get('/movie/upcoming');
    set({ upcomingMovies: [...resp.data.results] });
    return resp;
  },
  getSingleMovie: async (id) => {
    const state = getState();
    const popularMovie = state.popularMovies.find((m) => m.id === id);

    if (popularMovie) {
      return popularMovie;
    }

    const upcomingMovies = state.upcomingMovies.find((m) => m.id === id);

    if (upcomingMovies) {
      return upcomingMovies
    }

    const resp = await https().get(`/movie/${id}`);
    return resp.data;
  }
}));

export default useMovieStore;
