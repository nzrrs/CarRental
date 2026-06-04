import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/authentification/SignIn.jsx";
import CreateAccount from "../pages/authentification/CreateAccount.jsx";
import ForgotPassword from "../pages/authentification/ForgotPassword.jsx";
import AgencySignIn from "../pages/authentification/AgencySignIn.jsx";
import AgencyCreateAccount from "../pages/authentification/AgencyCreateAccount.jsx";
import AgencyForgotPassword from "../pages/authentification/AgencyForgotPassword.jsx";

export default function AuthRoutes() {
  return (
    <Routes>
      {/* Customer auth */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Agency auth */}
      <Route path="/agency/login" element={<AgencySignIn />} />
      <Route path="/agency/register" element={<AgencyCreateAccount />} />
      <Route path="/agency/forgot-password" element={<AgencyForgotPassword />} />
    </Routes>
  );
}
