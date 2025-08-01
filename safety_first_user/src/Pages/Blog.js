import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <Header />
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Our Blog
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Complaint" style={{ textDecoration: "none" }}>
                  Contact Us
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Fact Start */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">99</h1>
                <h5 className="text-white mt-1">
                  Success in getting happy customer
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25</h1>
                <h5 className="text-white mt-1">
                  Thousands of successful business
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">120</h1>
                <h5 className="text-white mt-1">
                  Total clients who love HighTech
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">5</h1>
                <h5 className="text-white mt-1">
                  Stars reviews given by satisfied clients
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact End */}
      {/* Blog Start */}
      <div className="container-fluid blog py-5 my-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: 600 }}
          >
            <h5 className="text-primary">Our Blog</h5>
            <h1>Latest Blog &amp; News</h1>
          </div>
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
              <div className="blog-item position-relative bg-light rounded">
                <img
                  src="img/blog-1.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
                <span
                  className="position-absolute px-4 py-3 bg-primary text-white rounded"
                  style={{ top: "-28px", right: 20 }}
                >
                  AI-Enhanced Fire Detection
                </span>
                <div
                  className="blog-btn d-flex justify-content-between position-relative px-3"
                  style={{ marginTop: "-75px" }}
                >
                  <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                    <a
                      to
                      className="btn text-white"
                      href="https://www.digitize-inc.com/blog/ai-fire-alarm-monitoring-future-detection.php?utm_source=chatgpt.com"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                    <div className="blog-icon-1">
                      <p className="text-white px-2">
                        Share
                        <i className="fa fa-arrow-right ms-3" />
                      </p>
                    </div>
                    <div className="blog-icon-2">
                      <Link to className="btn me-1">
                        <i className="fab fa-facebook-f text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-twitter text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-instagram text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-content text-center position-relative px-3"
                  style={{ marginTop: "-25px" }}
                >
                  {/* <img
                    src="img/admin.jpg"
                    className="img-fluid rounded-circle border border-4 border-white mb-3"
                    alt=""
                  /> */}<br/><br/><br/>
                  <h5 className>By Andrew Erickson</h5>
                  <span className="text-secondary">24 March 2023</span>
                  <p className="py-2">
                    Artificial Intelligence (AI) is being integrated into fire
                    alarm systems to improve detection accuracy and reduce false
                    alarms. By analyzing data from smoke detectors, heat
                    sensors, and air quality monitors, AI can predict developing
                    fire hazards more effectively. This intelligent analysis
                    allows for earlier warnings and more efficient
                    emergency responses.
                  </p>
                </div>
                {/* <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <Link to className="text-white"><small><i className="fas fa-share me-2 text-secondary" />5324 Share</small></Link>
                                    <Link to className="text-white"><small><i className="fa fa-comments me-2 text-secondary" />5 Comments</small></Link>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".5s">
              <div className="blog-item position-relative bg-light rounded">
                <img
                  src="img/blog-2.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
                <span
                  className="position-absolute px-4 py-3 bg-primary text-white rounded"
                  style={{ top: "-28px", right: 20 }}
                >
                  Multi-Sensor Detection Systems
                </span>
                <div
                  className="blog-btn d-flex justify-content-between position-relative px-3"
                  style={{ marginTop: "-75px" }}
                >
                  <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                    <a to className="btn text-white " 
                    href="https://resources.impactfireservices.com/fire-detection-technology-advancements?utm_source=chatgpt.com">
                      Read More
                    </a>
                  </div>
                  <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                    <div className="blog-icon-1">
                      <p className="text-white px-2">
                        Share
                        <i className="fa fa-arrow-right ms-3" />
                      </p>
                    </div>
                    <div className="blog-icon-2">
                      <Link to className="btn me-1">
                        <i className="fab fa-facebook-f text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-twitter text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-instagram text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-content text-center position-relative px-3"
                  style={{ marginTop: "-25px" }}
                >
                  {/* <img
                    src="img/admin.jpg"
                    className="img-fluid rounded-circle border border-4 border-white mb-3"
                    alt=""
                  /> */}<br/><br/><br/>
                  <h5 className>By Aren fince </h5>
                  <span className="text-secondary">23 April 2023</span>
                  <p className="py-2">
                  Modern fire detection systems are incorporating multiple sensors to detect various fire indicators such as smoke, heat, and gas emissions. This multi-sensor approach enhances detection accuracy and reduces false alarms by cross-referencing Such systems are particularly beneficial in environments handling sensitive materials like chemicals or gases.
                  </p>
                </div>
                {/* <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <Link to className="text-white"><small><i className="fas fa-share me-2 text-secondary" />5324 Share</small></Link>
                                    <Link to className="text-white"><small><i className="fa fa-comments me-2 text-secondary" />5 Comments</small></Link>
                                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".7s">
              <div className="blog-item position-relative bg-light rounded">
                <img
                  src="img/blog-3.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
                <span
                  className="position-absolute px-4 py-3 bg-primary text-white rounded"
                  style={{ top: "-28px", right: 20 }}
                >
                  AI Sensors for Smoke Analysis
                </span>
                <div
                  className="blog-btn d-flex justify-content-between position-relative px-3"
                  style={{ marginTop: "-75px" }}
                >
                  <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                    <a to className="btn text-white " href="https://www.azoai.com/news/20250204/AI-Sensor-Slashes-False-Fire-Alarms-by-Analyzing-Smoke-Light-Scattering.aspx?utm_source=chatgpt.com">
                      Read More
                    </a>
                  </div>
                  <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                    <div className="blog-icon-1">
                      <p className="text-white px-2">
                        Share
                        <i className="fa fa-arrow-right ms-3" />
                      </p>
                    </div>
                    <div className="blog-icon-2">
                      <Link to className="btn me-1">
                        <i className="fab fa-facebook-f text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-twitter text-white" />
                      </Link>
                      <Link to className="btn me-1">
                        <i className="fab fa-instagram text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-content text-center position-relative px-3"
                  style={{ marginTop: "-25px" }}
                >
                  {/* <img
                    src="img/admin.jpg"
                    className="img-fluid rounded-circle border border-4 border-white mb-3"
                    alt=""
                  /> */}<br/><br/><br/>
                  <h5 className>By Daniel Martin</h5>
                  <span className="text-secondary">30 jan 2023</span>
                  <p className="py-2">
                  Researchers have developed AI sensors capable of distinguishing between smoke caused by actual fires and non-fire-related aerosol particles. These sensors analyze light scattering characteristics of particles, which vary with different wavelengths of light, thereby reducing false alarms and enhancing safety
                  </p>
                </div>
                {/* <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    <Link to className="text-white"><small><i className="fas fa-share me-2 text-secondary" />5324 Share</small></Link>
                                    <Link to className="text-white"><small><i className="fa fa-comments me-2 text-secondary" />5 Comments</small></Link>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
