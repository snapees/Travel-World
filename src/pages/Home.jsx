import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList";
import MasonaryImagesGallery from "../components/Image-Gallery/MasonaryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*============ hero section ===========  */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content  ">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda architecto eveniet asperiores sed sit commodi,
                  deleniti ea non minus fuga totam, accusantium impedit ipsum
                  fugiat unde eum modi, provident quae.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ========== new section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h6 className="services__subtitle">What We Serve</h6>
              <h2 className="services__title">We offer best our services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* =========== tour section ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>

      {/* ========= experience section start ============== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Repellendus hic odio adipisci quisquam facere tempora!
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trip</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= experience section end ============== */}

      {/* ========= gallerrry section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">Visit our clients tour gallery</h2>
            </Col>

            <Col lg="12">
              <MasonaryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= gallerrry section end============= */}

      {/* ============== testimonial section start ============= */}
      <sectin>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Clients Love"} />
              <h2 className="testimonial__title">Clients about us</h2>
            </Col>

            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </sectin>
      {/* ============== testimonial section end ============= */}

      {/* ================ newsletter section start -================== */}
      <Newsletter />
      {/* ================ newsletter section end -================== */}
    </>
  );
};

export default Home;
