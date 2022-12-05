import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

// Styles
import styles from "./Banner.module.css";

// Images
import developer from "../../assets/image/man-developing.svg";

const Banner = () => {
  return (
    <Container>
      <section className={styles.container}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className={styles.tagline}>Welcome to my portfolio</span>
            <h2>Hi I'm Alireza</h2>
            <Typewriter
              options={{
                strings: [
                  "I'm Front-end-developer with demonstrated skills in building web applications using JavaScript along with React.",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                pauseFor: 2500,
                deleteSpeed: 50,
                wrapperClassName: styles.type,
                cursor: null,
              }}
            />
            <button className={styles.button}>
              Let's Conncet <i className="bi bi-arrow-right-circle"></i>
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img className={styles.image} src={developer} alt="developer" />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Banner;
