import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrurantMenu from "./components/RestrurantMenu";
//import RestrurantMenu from "./components/RestrurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";


const AppLayout = () => {
  return (
    <>
      <Header />

      {/* <About/>// if path is /about
      <Body />// if path is /
      <Contact/>// if path is/contact */}

      {/* {Outlet} */}
      {/* if we have to create nested routes we will have to create Outlet */}
      {/* i want middle portion to keep on changing according to route */}
      {/* what ever children is there inside appRouter will go inside outLet */}

      <Outlet/>

      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:resid",
        element:<RestrurantMenu/>,
      },

    ],
  },
  // {
  //   path:"/about",
  //   element:<About/>
  // }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
