const Pager = ({ previous, next, setFetchURL }) => {
  return (
    <div>
      {previous && (
        <button
          onClick={() => {
            setFetchURL(previous);
          }}
        >
          Previous
        </button>
      )}
      {next && (
        <button
          onClick={() => {
            setFetchURL(next);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pager;
