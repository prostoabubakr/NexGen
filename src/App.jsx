import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import NotFound from './pages/notFound/NotFound';
import ProtectedRout from './utils/ProtectedRout';
import AuthCheck from './utils/AuthCheck';
import Layout from './pages/layout/layout';
import ContactUs from './pages/contactUs/contactUs';
import Place from './pages/place/place';
import Project from './pages/projects/project';
import Calculator from './pages/calculator/calculator';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AuthCheck>
          <Login />
        </AuthCheck>
      ),
    },
    {
      path: '/register',
      element: (
        <AuthCheck>
          <Register />
        </AuthCheck>
      ),
    },
    {
      path: '/home',
      element: (
        <ProtectedRout>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRout>
      ),
    },
    {
      path: '/place',
      element: (
        <ProtectedRout>
          <Layout>
            <Place/>
          </Layout>
        </ProtectedRout>
      ),
    },
    {
     path:"/contactUs",
     element :(
      <ProtectedRout>
        <Layout>
          <ContactUs/>
        </Layout>
      </ProtectedRout>
     )
    },
   {
    path:"/project",
    element:(
      <ProtectedRout>
        <Layout>
          <Project/>
        </Layout>
      </ProtectedRout>
    )
   },
    {
      path: '*', 
      element: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
    {
     path:"/calculator",
     element:(
      <ProtectedRout>
        <Layout>
          <Calculator/>
        </Layout>
      </ProtectedRout>
     )
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
