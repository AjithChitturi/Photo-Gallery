import { Route, Routes } from "react-router-dom";
import SignUp from "./assets/pages/SignUp";
import Home from "./assets/pages/Home";
import { AuthProvider } from "./context/auth";
import  PrivateRoutes  from "./routes/PrivateRoutes";
import  PublicRoutes  from "./routes/PublicRoutes"; // Assuming this is the correct import for public routes

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path="/SignUp" element={<PublicRoutes><SignUp /></PublicRoutes>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
