import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardBrowser from "../../components/CardBrowser";
import { filterLocation } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    max-width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;

    margin: 40px;
`;

function BrowserSpeaker() {
    let [input, setInput] = useState("");
    let [name, setName] = useState("");
    const dispatch = useDispatch();
    const dataLocations = useSelector((state) => state.browserSpeaker.location);
    const handleChange = (event) => {
        console.log(input);
        setInput(event.target.value);
    };

    useEffect(() => {
        dispatch(filterLocation());
    }, []);

    const handleClick = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
        return (input = "");
    };
    return (
        <div style={{ margin: "100px 0px 100px 0px" }}>
            <Container>
                <SearchWrapper>
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Nama Pembicara"
                        aria-label="Search"
                        onChange={handleChange}
                    />

                    <select className="form-control " onChange={handleClick}>
                        <option>All Location</option>
                        {dataLocations !== null &&
                            dataLocations.map((item) => (
                                <option>{item.name}</option>
                            ))}
                    </select>
                </SearchWrapper>
            </Container>

            <Container>
                <Container1>
                    <CardBrowser user={input} location={name} />
                </Container1>
            </Container>
        </div>
    );
}

export default BrowserSpeaker;
