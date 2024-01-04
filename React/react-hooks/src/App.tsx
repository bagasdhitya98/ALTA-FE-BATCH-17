import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Detail from "./pages/detail";
import News from "./pages/news";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/auth/login" />
        <Route element={<Register />} path="/auth/register" />
        <Route element={<News />} path="/" />
        <Route element={<Detail />} path="/detail" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
