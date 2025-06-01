import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import Layout from "../pages/learn/Layout";
import QuickStartPage from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import TinkingInReactPage from "../pages/learn/TinkingInReact";
import InstallationPage from "../pages/learn/Installation";
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../auth/ProtectedRoute";

const isLoggedIn = true;
const userData: {email:string} | null = isLoggedIn ? {email: "email@gmail.com"} : null;


const router = createBrowserRouter(createRoutesFromElements(
    <>
    {/* Root Layout */}
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contribute" element={
        <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
          <ContributePage/>
        </ProtectedRoute>}/>
      <Route path="/login" element={
        <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
          <LoginPage/>
        </ProtectedRoute>}/>
    </Route>

    {/* Learn Layout */}
    <Route path="/learn" element={<LearnLayout/>}>
      <Route index element={<QuickStartPage/>}/>
      <Route path="thinking-in-react" element={<TinkingInReactPage/>}/>
      <Route path="installation" element={<InstallationPage/>}/>
    </Route>
    </>
));

export default router;