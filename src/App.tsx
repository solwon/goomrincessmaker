import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Board from "./pages/board/Board";
import NotFound from "./component/NotFound";
import ChangeDetect from "./pages/ChangeDetect";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/*메인로그인페이지 */}
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/*" element={<User />} />
        <Route path="board/*" element={<Board />} />
        <Route path="changedetect" element={<ChangeDetect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );

  // 메인페이지
  // 로그인 + 회원가입
  // 로그인해야 접근가능한 입력페이지
}
