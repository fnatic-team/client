import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function PageAudience() {
  const [dropdownOpenStatus, setDropdownOpenStatus] = useState(false);
  const [dropdownOpenRate, setDropdownOpenRate] = useState(false);
  const [status, setStatus] = useState("On Going");
  const [rate, setRate] = useState(" - ");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeRate = (event) => {
    setRate(event.target.value);
  };

  const toggleStatus = () => setDropdownOpenStatus((prevState) => !prevState);
  const toggleRate = () => setDropdownOpenRate((prevState) => !prevState);

  return (
    <div style={{ margin: "100px 0px 80px 0px" }}>
      <div className="container" animation="fade-down" duration={1000}>
        <div className="row bg-white m-3 border  pad1 shadow-lg">
          <div className="col m-3 modal-body text-center align-self-center">
            <div className="col m-3 justify-content-space-evenly">
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
                <div className="text-center d-flex flex-column h-100 justify-content-center">
                  <h6 className="font-weight-bold">Name Audience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row bg-white m-3 border  pad1 shadow-lg">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Speaker</th>
                <th scope="col">Status Undangan</th>
                <th scope="col">Status</th>
                <th scope="col">Opsi</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Fullan</td>
                <td>Diterima</td>
                <td>On Going</td>
                <td>
                  <Dropdown>
                    <DropdownToggle
                      isOpen={dropdownOpenStatus}
                      toggle={toggleStatus}
                      caret
                    >
                      {status}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={handleChangeStatus}
                        value="Pending"
                      >
                        Pending
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeStatus} value="Cancel">
                        Cancel
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeStatus} value="Next">
                        Next
                      </DropdownItem>
                      <DropdownItem
                        onClick={handleChangeStatus}
                        value="On Going"
                      >
                        On Going
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeStatus} value="Finish">
                        Finish
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
                <td>
                  <Dropdown isOpen={dropdownOpenRate} toggle={toggleRate}>
                    <DropdownToggle caret color="info">
                      {rate}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={handleChangeRate} value="1">
                        1
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeRate} value="2">
                        2
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeRate} value="3">
                        3
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeRate} value="4">
                        4
                      </DropdownItem>
                      <DropdownItem onClick={handleChangeRate} value="5">
                        5
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PageAudience;
