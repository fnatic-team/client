import React from "react";
import styled from "styled-components";

const RegistrationWrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top:30px;
  margin: auto;
  .divider {
    width: 1px;
    border: 1px solid black;
  }

  .container1 {
    margin-top:30px;
    margin-bottom: 20px;
  }
`;

function Registrasi2() {
  return (
    <div>
      <RegistrationWrapper>
        <div className="container-fluid">
          <div className="row container1">
            <div className="col-sm-12 col-center text-center">
              <h2>Buat akun di Narasumber.com</h2>
              <p>
                Narasumber adalah website untuk mencari para publik speaker yang
                sudah berpengalaman.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-sm-10 col-md-5 col-md-offset-1">
              <img src="https://via.placeholder.com/150" alt="" />
              <div>
                <h4>Speaker</h4>
                <p>Apakah anda public speaker yang berpengalaman?</p>
                <p>Daftar sebagai Speaker.</p>
              </div>
              <button className="btn btn-xs btn-primary mt-30">
                Daftar sebagai Speaker
              </button>
            </div>
            <div className="divider"></div>
            <div className="col-sm-10 col-md-5 col-md-offset-1">
              <img src="https://via.placeholder.com/150" alt="" />
              <div>
                <h4>Audience</h4>
                <p>Mencari publik speaker untuk event?</p>
                <p>Daftar sebagai Audience.</p>
              </div>
              <button className="btn btn-xs btn-primary mt-30">
                Daftar sebagai Audience
              </button>
            </div>
          </div>
        </div>
      </RegistrationWrapper>
    </div>
  );
}

export default Registrasi2;
