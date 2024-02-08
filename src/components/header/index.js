import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 header my-2">
              <img
                className="Header-logo"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="header-logo"
              />

              <div className="search">
                <div className="d-flex align-middle align-items-center">
                  <div className="search-left">
                    <i className="fas fa-location-dot"></i>
                    <select
                      className="search-select border-0"
                      name="category"
                      id="category"
                    >
                      <option value="surat">Surat</option>
                      <option value="ahm">ahm</option>
                      <option value="vadodara">vadodara</option>
                    </select>
                  </div>

                  <p className=" m-0">|</p>
                  <div className="search-right">
                    <i className="fas fa-search"></i>
                    <input
                      className="border-0"
                      type="text"
                      placeholder="Search for restaurant, cuisine or a dish"
                    />
                  </div>
                </div>
              </div>
              <div className="right-header">
                <a href="/">Log in</a>
                <a href="/">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
