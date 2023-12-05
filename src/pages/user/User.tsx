import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import EmailActivate from "./EmailActivate";
import Helppw from "./Helppw";
import Reset from "./Reset";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="emailActivate/*" element={<EmailActivate />} />
        <Route path="helppw" element={<Helppw />} />
        <Route path="reset" element={<Reset />} />
      </Routes>
    </>
  );
};

export default User;
