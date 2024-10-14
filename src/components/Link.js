import { useAtom } from "jotai";
import { setPathAtom } from "../atoms";

const Link = ({ children, to }) => {
  const [_, setPath] = useAtom(setPathAtom);
  return (
    <button
      onClick={() => {
        setPath(`/${to}`);
        window.history.pushState({ page: to }, to, to);
      }}
    >
      {children}
    </button>
  );
};

export default Link;
