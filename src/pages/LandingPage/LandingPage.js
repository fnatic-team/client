import React from "react";
import CategorySection from "../../components/CategorySection";
import Subscribe from '../../components/Subscribe'
import Jumbotron from '../../components/Jumbotron'

function LandingPage() {
  return (
    <div>
      <Jumbotron/>
      <CategorySection />
      <Subscribe/>  
    </div>
  );
}

export default LandingPage;
