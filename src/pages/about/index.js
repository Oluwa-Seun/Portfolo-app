import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
 // skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8" data-aos="zoom-in" data-aos-duration="2000">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp" data-aos="zoom-out" data-aos-duration="1500">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
              <p>{dataabout.aboutme3} <br /> {dataabout.aboutme4}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp" data-aos="fade-up" data-aos-duration="1500">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody data-aos="fade-up" data-aos-duration="1000">
                {worktimeline.map((data, i) => {
                  //Use this method on the other project!
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
       
        <Row className="sec_sp">
          <Col lang="5" data-aos="fade-up" data-aos-duration="1500">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i} data-aos="fade-up" data-aos-duration="1000">
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};


/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4" data-aos="fade-up" data-aos-duration="1400">Tech Stack</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i} data-aos="fade-up" data-aos-duration="1400">
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
*/