import Login from "pages/Login";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router";
import ProtectedRoute from "routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isClosed />}>
        <Route path="/" element={<Login></Login>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
