import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategorySection from "../../components/CategorySection";
import Subscribe from '../../components/Subscribe'
import Jumbotron from '../../components/Jumbotron'

function LandingPage() {
  return (
    <div>
      <Header />
      <Jumbotron/>
      <CategorySection />
      <Subscribe/>
      <Footer />
     
    </div>
  );
}

export default LandingPage;
