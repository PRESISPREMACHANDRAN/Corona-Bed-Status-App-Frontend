import React, { useState } from 'react'
import Header from './Header'

const AddData = () => {

    const [input, changeInput] = useState({
      state: "",
      ruralHospitals: "",
      ruralBeds:"",
      urbanHospitals: "",
      urbanBeds: "",
      totalHospitals: "",
      totalBeds: "",
      asOn: "",
    });

    const readValue=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }

    const submitValue=()=>{
        console.log(input)
    }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  value={input.state}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Rural Hospitals
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="ruralHospitals"
                  value={input.ruralHospitals}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Rural Beds
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="ruralBeds"
                  value={input.ruralBeds}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Urban Hospitals
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="urbanHospitals"
                  value={input.urbanHospitals}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Urban Beds
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="urbanBeds"
                  value={input.urbanBeds}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Total Hospitals
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalHospitals"
                  value={input.totalHospitals}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Total Beds
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="totalBeds"
                  value={input.totalBeds}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Date And Time
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="asOn"
                  value={input.asOn}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddData