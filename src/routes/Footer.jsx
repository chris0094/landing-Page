import React from "react";

export const Footer = () => {
 
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4" />

 
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <p className="pt-2">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>
        <div className="col-md-5 col-12">
          <div className="form-outline form-white mb-4">
            <input type="email" id="form5Example21" className="form-control" />
            <label className="form-label" htmlFor="form5Example21">
              Email address
            </label>
          </div>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-outline-light mb-4">
            Subscribe
          </button>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0" />

      <div className="col-lg-3 col-md-6 mb-4 mb-md-0" />
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0" />

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Cristhian Saldarriaga
      </div>
      {/* Copyright */}
    </footer>
  );
};
