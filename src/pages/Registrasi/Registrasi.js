import React from "react";
import styled from "styled-components";

const RegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  justify-content: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

function Registrasi() {
  return (
    <RegistrationWrapper>
      <Container>
        <h1>Buat Akun di Narasumber</h1>
        <span>
          Narasumber adalah website untuk mencari para publik speaker yang sudah
          berpengalaman
        </span>
        <Container1>
          <Container2>
            <span>Speaker</span>
            <span>
              Apakah anda public speaker yang berpengalaman? 
            </span>
            <p>Daftar sebagai
              Speaker</p>
            <div>
              <button className="btn btn-lg btn-success mt-30">
                Daftar Sebagai Speaker
              </button>
            </div>
          </Container2>
          <Container2>
            <span>Audience</span>
            <span>
              Mencari publik speaker untuk event?
            </span>
            <p>Daftar sebagai Audience</p>
            <div>
              <button className="btn btn-lg btn-success mt-30">
                Daftar Sebagai Audience
              </button>
            </div>
         
          </Container2>
        </Container1>
      </Container>
    </RegistrationWrapper>
  );
}

export default Registrasi;
