
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout } from './Layouts';
import { MainDashboardLayout } from './Layouts';

import Login from "./main/components/Auth/Login"

import {
  Home,
  About,
  PricingPage,

} from "./main/pages";
import DashboardFrame from "./main/components/Dashboard/dashboardFrame";

import SignUp from "./main/components/Auth/Signup";


export interface IApplicationProps {}


const App: React.FunctionComponent<IApplicationProps> = () => {
  return (
    <>
       <ThemeProvider theme={theme}>
        <GlobalStyles />
      <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Route>
          <Route element={<MainDashboardLayout />}>
            <Route path="/dashboard" element={<DashboardFrame/>} />

          </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<SignUp/>}/>
 
      </Routes>
      </ThemeProvider>
      <StyledToastContainer />
    </>
  )
}

export default App


const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
    font-family: inherit;
    font-size: 14px;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;