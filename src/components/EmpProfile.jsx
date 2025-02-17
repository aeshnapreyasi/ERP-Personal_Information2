import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmpStyles.css";

const EmpProfile = () => {
  return (
    <div className="px-5 mt-4 d-flex justify-content-center ">
      <div className="card p-3 w-50 mb-5 rounded-3">
        <div className="d-flex align-items-center">
          <img
            src="https://img.freepik.com/free-photo/elegant-businessman-office_155003-9641.jpg?ga=GA1.1.35690456.1691191480&semt=ais_hybrid"
            alt="Profile"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />

          <div className="ms-3">
            <h5 className="mb-0 fw-bold">Sarah Johnson</h5>
            <p className="text-muted mb-0">Senior UX Designer</p>

            <div className="d-flex align-items-center mt-1">
              <span className="badge bg-primary me-2">#EMP2025</span>
              <i
                className="bi bi-circle-fill text-success me-1"
                style={{ fontSize: "10px" }}
              ></i>
              <span className="text-muted">Active Employee</span>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {/* Left Column */}

          <div className="col-md-8">
            {/* Personal Information */}
            <div className="card mb-4 mt-5">
              <div className="card-header">
                <h5>
                  <i className="bi bi-person"></i> Personal Information
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <p className="text-secondary">
                        Date Of Birth
                        <br />
                        <span className="fw-bold text-dark">15 March 1992</span>
                      </p>
                    </div>
                    <div className="row">
                      <p className="text-secondary">
                        Gender
                        <br />
                        <span className="fw-bold text-dark">Male</span>
                      </p>
                    </div>
                    <div className="row">
                      <p className="text-secondary">
                        Address
                        <br />
                        <span className="fw-bold text-dark">
                          123 Business Avenue, NY
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="row">
                      <p className="text-secondary">
                        Current Address
                        <br />
                        <span className="fw-bold text-dark">
                          123 Business Ave, Suite 100, San Francisco, CA 94107
                        </span>
                      </p>
                    </div>
                    <div className="row">
                      <p className="text-secondary">
                        Emergency Contact
                        <br />
                        <span className="fw-bold text-dark">
                          +1 (555) 987-6543
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Information */}
            <div className="card">
              <div className="card-header">
                <h5>
                  <i className="bi bi-briefcase"></i> Job Information
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="fw-bold">Department</div>
                    Design Department
                  </div>

                  <div className="col-md-6">
                    <div className="fw-bold mt-2"> Employment Type</div>
                    Full Time
                  </div>

                  <div className="col-md-6">
                    <div className="fw-bold mt-2">Date of Joining</div>
                    01 January 2025
                  </div>
                  <div className="col-md-6">
                    <div className="fw-bold mt-2">Reporting Manager</div>
                    Mike Anderson
                  </div>
                  <div className="col-md-6">
                    <div className="fw-bold mt-2">Work Location</div>
                    San Fancisco HQ
                  </div>

                  <div className="col-md-6">
                    <div className="fw-bold mt-2"> Shift Timing</div>9:00 AM -
                    6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}

          <div className="col-md-4 mt-4">
            {/* Salary Information */}
            <div className="card mb-4 mt-4">
              <div className="card-header">
                <h5>
                  <i className="bi bi-cash-stack"></i> Salary Information
                </h5>
              </div>
              <div className="card-body">
                <div className="fw-bold">Annual CTC</div>
                $120,000
                <div className="fw-bold mt-2">Monthly In-hand</div>
                $5,500
              </div>
            </div>

            {/* Bank & Tax Details */}
            <div className="card">
              <div className="card-header">
                <h5>
                  <i className="bi bi-bank"></i> Bank & Tax Details
                </h5>
              </div>
              <div className="card-body">
                <div className="fw-bold">Bank Account</div>
                XXXX-XXXX-1234
                <div className="fw-bold mt-2">PF Number</div>
                PF-5235-7894
                <div className="fw-bold mt-2">PAN</div>
                ABCD1234F
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpProfile;
