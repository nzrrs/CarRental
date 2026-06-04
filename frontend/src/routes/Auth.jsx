import { Routes, Route } from "react-router-dom";

import SignIn from "../authentification/SignIn.jsx";
import CreateAccount from "../authentification/CreateAccount.jsx";
import ForgotPassword from "../authentification/ForgotPassword.jsx";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}
