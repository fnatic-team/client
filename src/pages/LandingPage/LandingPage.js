import React, { useEffect, useState } from "react";
import CategorySection from "../../components/CategorySection";
import Subscribe from "../../components/Subscribe";
import Jumbotron from "../../components/Jumbotron";
import Hiring from "../../components/Hiring";

function LandingPage() {
    const [change, setChange] = useState("transparant");

    const handleScroll = () => {
        window.scrollY > 0 ? setChange("#003648") : setChange("");
        console.log(change);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // eslint-disable-next-line
    }, [change]);

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
