import React,{useState} from "react";
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
    justify-content:  space-around;
    margin: 40px;
`;



function BrowserSpeaker() {

    const [input, setInput] = useState("")

    

    return (
        <div style={{ margin: "100px 0px 100px 0px" }}>
            <Container>
                <SearchWrapper>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Nama Pembicara"
                        aria-label="Search"
                        onChange={(event) => setInput(event.target.value)}
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
                    <CardBrowser />
                </Container1>
            </Container>
        </div>
    );
}

export default BrowserSpeaker;
