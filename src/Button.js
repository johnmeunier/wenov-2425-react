const Button = ({ children }) => (
  <button
    type="button"
    className="wenov-button"
    onClick={() => {
      console.log("click");
    }}
  >
    {children}
  </button>
);

export default Button;
