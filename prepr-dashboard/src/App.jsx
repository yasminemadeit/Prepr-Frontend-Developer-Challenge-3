//import { useState } from 'react'
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Navbar from './components/navbar/Navbar';
import './assets/global.scss';
//import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Dropzone from 'react-dropzone';

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        
        <div className="contentContainer">
          <Outlet />
        </div>

       
      </div>
    );
  };
  

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/project-create",
          element:<ProjectDetail/>
        },
      ]
    },
  ]);
  

  return <RouterProvider router={router}/>;
   

}

export default App
