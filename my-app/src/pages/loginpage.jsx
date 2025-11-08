import Navbar from "../components/navbar";
import Footer from "../components/footer.jsx";
import BetaDisclaimer from "../components/betadisclaimer.jsx";
import { Auth } from "../config/auth.js";

import "./loginpage.css";


export function LoginPage() {
  return (
    <>
      <Navbar />
      <BetaDisclaimer />


      <Auth />


      <Footer />
    </>
  );
}
