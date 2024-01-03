import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAll = () => {
  const [status, changeStatus] = useState({
    success: true,
    data: {
      summary: {
        ruralHospitals: 39620,
        ruralBeds: 559176,
        urbanHospitals: 7544,
        urbanBeds: 862346,
        totalHospitals: 47164,
        totalBeds: 1421522,
      },
      sources: [
        {
          url: "https://pib.gov.in/PressReleasePage.aspx?PRID=1539877",
          lastUpdated: "2017-01-01T00:00:00.000Z",
        },
      ],
      regional: [],
    },
    lastRefreshed: "2023-04-09T21:27:51.617Z",
    lastOriginUpdate: "2017-01-01T00:00:00.000Z",
  });

  const fetchData = () => {
    axios
      .get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then((response) => {
        changeStatus(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">State</th>
                      <th scope="col">Rural Hospitals</th>
                      <th scope="col">Rural Beds</th>
                      <th scope="col">Urban Hospitals</th>
                      <th scope="col">Urban Beds</th>
                      <th scope="col">Total Hospitals</th>
                      <th scope="col">Total Beds</th>
                      <th scope="col">Date and Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {status.data.regional.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">1</th>
                          <td>{value.state}</td>
                          <td>{value.ruralHospitals}</td>
                          <td>{value.ruralBeds}</td>
                          <td>{value.urbanHospitals}</td>
                          <td>{value.urbanBeds}</td>
                          <td>{value.totalHospitals}</td>
                          <td>{value.totalBeds}</td>
                          <td>{value.asOn}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
