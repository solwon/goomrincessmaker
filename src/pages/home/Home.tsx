import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="p-16"
        onClick={() => {
          navigate("/board");
        }}
      >
        board
      </div>
      <div className="p-16">
        <button
          onClick={() => {
            navigate("/user/signin");
          }}
        >
          signin
        </button>
        <button
          onClick={() => {
            navigate("/user/signup");
          }}
        >
          signup
        </button>
        <button
          onClick={() => {
            navigate("/user/helppw");
          }}
        >
          helppw
        </button>
      </div>
    </div>
  );
};

export default Home;
