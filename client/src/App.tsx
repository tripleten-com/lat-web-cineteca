import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyMoviesPage } from "./pages/MyMoviesPage";
import { RegisterPage } from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-movies" element={<MyMoviesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
