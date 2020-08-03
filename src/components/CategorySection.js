import React from "react";
import CardCategory from "./CardCategory";
import Rosa from "react-on-scroll-animation";

function CategorySection() {
    return (
        <Rosa className="container" animation="fade-down" duration={1000}>
            <h2 className="m-5">Speaker by Category</h2>
            <div className="row m-auto">
                <div className="col-sm-4">
                    <CardCategory />
                </div>
                <div className="col-sm-4">
                    <CardCategory />
                </div>
                <div className="col-sm-4">
                    <CardCategory />
                </div>
                <div className="col-sm-4">
                    <CardCategory />
                </div>
                <div className="col-sm-4">
                    <CardCategory />
                </div>
                <div className="col-sm-4">
                    <CardCategory />
                </div>
            </div>
        </Rosa>
    );
}

export default CategorySection;
