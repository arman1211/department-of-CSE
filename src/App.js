
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Syllebus from './components/Syllebus/Syllebus';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: ([

        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/profile",
          element:<Profile></Profile>
        },
        {
          path:"/syllebus",
          element:<Syllebus></Syllebus>
        },
        {
          path:"/project",
          element:<Projects></Projects>
        },
        {
          path:"/login",
          element:<Login></Login>
        }

      ])
      

    },
    {
      path: "*",
      element:<p>This page is not available. Please go to Home page<Link to ='/'>Home</Link></p>
    }
    
  ])
  return (
    <div className="App">
      

    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
