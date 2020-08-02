import React from "react";
import CategorySection from "../../components/CategorySection";
import Subscribe from "../../components/Subscribe";
import Jumbotron from "../../components/Jumbotron";
import Hiring from "../../components/Hiring";

function LandingPage() {
  return (
    <div>
      <Jumbotron />
      <Hiring />
      <CategorySection />
      <Subscribe />
    </div>
  );
}

export default LandingPage;
