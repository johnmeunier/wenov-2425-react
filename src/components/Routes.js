import List from "../pages/List";
import Alphabets from "../pages/Alphabets";
import Pokemon from "../pages/Pokemon";
import { useCallback } from "react";

const Routes = ({ path }) => {
  const returnComponent = useCallback((path) => {
    switch (true) {
      case /^\/$/.test(path) || /^\/\/$/.test(path):
        return <h1>Homepage</h1>;
      case /alphabets/.test(path):
        return <Alphabets />;
      case /list/.test(path):
        return <List />;
      case /^\/\/?pokemon\/[a-z]+$/.test(path):
        return <Pokemon />;
      default:
        return <h1>404</h1>;
    }
  }, []);
  return (
    <>
      <header>
        <h1>Header de mon app</h1>
      </header>
      <main>{returnComponent(path)}</main>
      <footer>Footer de mon app</footer>
    </>
  );
};

export default Routes;
