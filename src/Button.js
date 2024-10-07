import { useState, useEffect } from "react";

const Button = ({ children }) => {
  const [count, setCount] = useState(0);
  const [toto, setToto] = useState("");

  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      <button
        type="button"
        className="wenov-button"
        onMouseEnter={() => {
          setToto(new Date());
        }}
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        {children}
      </button>
      <h3>Mon bouton a été cliqué {count} fois</h3>
      <h3>{toto.valueOf()}</h3>
    </>
  );
};

export default Button;
