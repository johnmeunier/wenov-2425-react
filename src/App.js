import { useState } from "react";
import { atom, useAtom } from "jotai";
import Link from "./components/Link";
import Routes from "./components/Routes";
import { setPathAtom } from "./atoms";

// import List from "./pages/List";
// import Alphabets from "./pages/Alphabets";
// import Pokemon from "./pages/Pokemon";
// import { createBrowserRouter, Link, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

// const Layout = () => (
//   <>
//     <header>
//       <Link to="alphabets">Alphabets</Link>
//       <Link to="list">List</Link>
//     </header>
//     <Outlet />
//     <footer>Wenov</footer>
//   </>
// );

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <div>Hello world!</div>,
//       },
//       {
//         path: "/list",
//         element: <List />,
//       },
//       {
//         path: "/pokemon/:name",
//         element: <Pokemon />,
//       },
//       {
//         path: "/alphabets",
//         element: <Alphabets />,
//       },
//     ],
//   },
// ]);

function App() {
  const [path] = useAtom(setPathAtom);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/alphabets">Alphabets</Link>
      <Link to="/list">List</Link>
      <main>
        <Routes path={path} />
      </main>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
