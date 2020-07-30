import React from 'react'
import styled from "styled-components";
import {Input} from "reactstrap"

const DivForm = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin: auto;
  height: 100%;
  border: 0.001rem solid rgb(79, 252, 79);
`;




function Subscribe() {
    return (
        <DivForm>
            <h5>Subscribe to Our Newslater</h5>
            <p>News updates, notifications about speaker</p>
            <form>
                <Input/>
            </form>
        </DivForm>
    )
}

export default Subscribe
