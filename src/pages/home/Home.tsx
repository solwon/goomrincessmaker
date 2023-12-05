import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  /// 테일윈드 넣었으면 최소한 알아볼 수 있게는 만듭시다 좀
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
      {/* 프롭 변동사항 확인하는 임시 페이지 */}
      <div
        className="p-16"
        onClick={() => {
          navigate("/changedetect");
        }}
      >
        changedetect
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
