import React from "react";
import CardCategory from "./CardCategory";
import Rosa from "react-on-scroll-animation";
import imgreactjs from "../assets/images/reactjs.png";
import imgnode from "../assets/images/node.png";
import imgmysql from "../assets/images/mysql.png";
import imgmagento from "../assets/images/magento.svg";
import imgangular from "../assets/images/angular.svg";
import imgcodeigniter from "../assets/images/codeigniter.svg";

function CategorySection() {
    return (
        <Rosa className="container" animation="fade-down" duration={1000}>
            <h2 className="m-5 text-left">Speaker by Category</h2>
            <div className="row m-auto">
                <div className="col-sm-4">
                    <CardCategory
                        image={imgreactjs}
                        title="React JS"
                        tot_speak="40"
                    />
                </div>
                <div className="col-sm-4">
                    <CardCategory
                        image={imgangular}
                        title="Angular"
                        tot_speak="30"
                    />
                </div>
                <div className="col-sm-4">
                    <CardCategory
                        image={imgnode}
                        title="Node JS"
                        tot_speak="25"
                    />
                </div>
                <div className="col-sm-4">
                    <CardCategory
                        image={imgmysql}
                        title="MySql"
                        tot_speak="50"
                    />
                </div>
                <div className="col-sm-4">
                    <CardCategory
                        image={imgmagento}
                        title="Magento"
                        tot_speak="30"
                    />
                </div>
                <div className="col-sm-4">
                    <CardCategory
                        image={imgcodeigniter}
                        title="Codeigniter"
                        tot_speak="50"
                    />
                </div>
            </div>
        </Rosa>
    );
}

export default CategorySection;
