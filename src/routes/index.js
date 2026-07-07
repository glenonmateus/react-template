import Login from "pages/Login";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
