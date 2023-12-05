import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-fit w-screen border-b-2 shadow-md">
        <div className="flex justify-between p-4">
          <div>
            <button
              className="pl-4"
              onClick={() => {
                navigate("/");
              }}
            >
              Logo
            </button>
          </div>
          <div className="flex">
            {/* {isAuthenticated() ? (
              <button className="mr-2" onClick={handleLogout}>
                Logout
              </button>
            ) : ( */}
            <button
              className="mr-2"
              onClick={() => {
                navigate("/user/signin");
              }}
            >
              Login
            </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
