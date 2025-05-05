import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Freebook /> */}
      <Footer />
    </>
  );
}

export default Home;
