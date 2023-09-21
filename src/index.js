import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import MainLayout from './layouts/MainLayout';
import MovieLayout from './layouts/MovieLayout';
import MovieImagesPage from './pages/MovieImagesPage';
import LoginPage from './pages/LoginPage';
import AuthMiddleware from './middlewares/AuthMiddleware';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/" replace />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <AuthMiddleware />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: "/upcoming",
            element: <UpcomingMoviesPage />,
          },
        ]
      },
      {
        path: "/movies/:id",
        element: <MovieLayout />,
        children: [
          {
            path: '',
            element: <MoviePage />,
          },
          {
            path: 'images',
            element: <MovieImagesPage />
          }
        ]
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
