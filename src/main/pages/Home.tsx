import React from "react";
// import About from "../components/NewHome/Molecules/About/About";
// import Blog from "../components/NewHome/Molecules/Blog/Blog";
// import Decision from "../components/NewHome/Molecules/Decision/Decision";
import Feature from "../components/NewHome/Molecules/Features/Feature";
import GetStarted from "../components/NewHome/Molecules/Get-Started/GetStarted";
import Hero from "../components/NewHome/Molecules/Hero/Hero";
import Product from "../components/NewHome/Molecules/Product/Product";

const Home: React.FC  = () => {
  return (
    <div>
      <Hero />
      <Product />
      {/* <Decision /> */}
      <Feature />
      {/* <About />
      <Blog /> */}
      <GetStarted />
    </div>
  );
};

export default Home;
