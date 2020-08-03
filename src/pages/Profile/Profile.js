import React from "react";

function Profile() {
    return (
        <div style={{ margin: "100px 0px 80px 0px" }}>
            <div className="container" animation="fade-down" duration={1000}>
                <div className="row bg-white m-3 border  pad1 shadow-lg">
                    <div className="col m-3 modal-body text-center align-self-center">
                        <div className="row">
                            <div className="col-sm">
                                <div className="col-sm">
                                    <img
                                        className="rounded-circle"
                                        src="https://via.placeholder.com/200"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <div className="col-sm">
                                <div className="text-left d-flex flex-column h-100 justify-content-center">
                                    <h6 className="font-weight-bold">
                                        Name Speaker
                                    </h6>
                                    <p>FullStack Programmer</p>
                                    <div>
                                        <button className="btn btn-xs btn-primary">
                                            Hiring
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="divider"
                                style={{ border: "1px solid", width: "1px" }}
                            ></div>

                            <div className="col-sm p-4">
                                <div className="text-left d-flex flex-column h-100 justify-content-center">
                                    <div className="d-flex flex-row justify-content-between">
                                        <p>City</p>
                                        <span>Jakarta</span>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p>Available to</p>
                                        <span>Jakarta</span>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p>Fee</p>
                                        <span>Rp. 5.000.000 /jam</span>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between">
                                        <p>Languages</p>
                                        <span>Indonesia , English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row bg-white m-3 p-5 border shadow-lg">
                    <div className="col-sm">
                        <div className="text-left d-flex flex-column h-100 justify-content-center">
                            <h4 className="font-weight-bold">Bio</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row bg-white m-3 p-5 border shadow-lg">
                    <div className="col-sm">
                        <h4 className="text-left mb-4 font-weight-bold">
                            Media Social
                        </h4>
                        <div className="row text-left">
                            <div className="col-sm">
                                <i
                                    className="fa fa-2x fa-facebook-square"
                                    aria-hidden="true"
                                >
                                    {"    "}
                                    Facebook
                                </i>
                            </div>
                            <div className="col-sm">
                                <i
                                    class="fa fa-2x fa-linkedin-square"
                                    aria-hidden="true"
                                >
                                    {"    "}
                                    LinkedIn
                                </i>
                            </div>
                            <div className="col-sm">
                                <i
                                    class="fa fa-2x fa-instagram"
                                    aria-hidden="true"
                                >
                                    {"    "}
                                    Instagram
                                </i>
                            </div>
                            <div className="col-sm">
                                <i
                                    class="fa fa-2x fa-whatsapp"
                                    aria-hidden="true"
                                >
                                    {"    "}
                                    Whatsapp
                                </i>
                            </div>
                            <div className="col-sm">
                                <i
                                    class="fa fa-2x fa-youtube-play"
                                    aria-hidden="true"
                                >
                                    {"    "}
                                    Youtube
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
