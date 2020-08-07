import React, { useState } from "react";
import styled from "styled-components";
import CardBrowser from "../../components/CardBrowser";

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
    justify-content: space-aroun;
    margin: 40px;
`;

function BrowserSpeaker() {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        setInput(event.target.value);
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

                    <select className="form-control ">
                        <option>filter by location</option>
                        <option>filter by location</option>
                        <option>filter by location</option>
                        <option>filter by location</option>
                    </select>
                </SearchWrapper>
            </Container>

            <Container>
                <Container1>
                    <CardBrowser user={input} />
                </Container1>
            </Container>
        </div>
    );
}

export default BrowserSpeaker;
