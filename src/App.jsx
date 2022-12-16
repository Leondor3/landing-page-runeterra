import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Banner } from "./components/Banner";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { FooterTop } from "./components/FooterTop";
import { Menu } from "./components/Menu";
import { Update } from "./components/Update";
import "./styles/main.css";

function App() {
  return (
    <div className="">
      <Menu />
      <Banner />
      <Update />
      <Cards />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;
