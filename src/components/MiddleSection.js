import { Container, Card,CardBody, CardText, CardTitle, Button } from "reactstrap";
import profile from "./img/profileimg.jpg"
import React, { useRef, useState } from 'react';
import Lottie from "lottie-react";
import {AiOutlineStar, AiFillStar, AiOutlineArrowRight} from "react-icons/ai"
import Company from "./company.json"
import Work from "./work.json";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import a from "./img/Lt.png"
import b from './img/Twitter.png'
import c from "./img/Wipro.png"
import d from "./img/facebook.png"
import e from "./img/hcl.png"
import f from "./img/infosys.png"
import g from "./img/mahindra.png"
import h from "./img/tcs.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

function MiddleSection() {
const images = [ b,c,d,e,f,g,h,f, c];
    return (
        <Container className="" >
            <Container className="my-5 ">
                <h1 className="text-center my-5 text-white">
                    Companies With Us
                </h1>
                <div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            pauseOnMouseEnter: true,
                        }}
speed={4000}
breakpoints={{
    640: {
        slidesPerView: 4,
        spaceBetween: 30,
    },
}}

                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper bg-light px-3 py-md-4 py-2 rounded my-auto mx-auto"
                    >
                        {images.map((item, index)=> (
                            <SwiperSlide key={index}>
                            <img src={item} className="rounded logos"/>
                            </SwiperSlide>
                        ))}
                        
                       
                    </Swiper>
                </div>
            </Container>

            <Container className="py-5 text-white">
                <motion.div className="d-md-flex justify-content-between"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
<div className=" my-auto">
<h1 className="fw-light">
    Why Seek us For Job? 
</h1>
<ul class="list-group my-4">
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"> <AiOutlineStar className="text-warning"/> Lorem ipsum dolor sit amet. </li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"> <AiFillStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"><AiOutlineStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur.</li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"><AiFillStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
</ul>
<Button className="bg-transparent border-0 ms-4">
    Learn More <AiOutlineArrowRight/>
</Button>
</div>
<Lottie animationData={Work} loop={true} className="d-none d-md-block"/>

                </motion.div>

                <motion.div className="d-md-flex justify-content-between pt-4"
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{
                   duration: 1.5,
                 }}
                >
                <Lottie animationData={Company} loop={true}className="d-none d-md-block"/>
<div className=" my-auto ">
<h1 className="fw-light">
    What we have for the Recruiters? 
</h1>
<ul class="list-group my-4">
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"> <AiOutlineStar className="text-warning"/> Lorem ipsum dolor sit amet. </li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"> <AiFillStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"><AiOutlineStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur.</li>
  <li class="list-group-item bg-transparent border-0 text-white fs-5 fw-lighter"><AiFillStar className="text-warning"/>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
</ul>
<Button className="bg-transparent border-0 ms-4">
    Learn More <AiOutlineArrowRight/>
</Button>
</div>


                </motion.div>
            </Container>


            <Container className="mb-3">
                <h2 className="text-center text-uppercase text-white my-5">
                    Testimonials
                </h2>
                <>
                    <Swiper
                        className=" mx-auto mySwiper "
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3500,
                            pauseOnMouseEnter: true,
                        }}
                        speed={3000}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 80,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide className="pb-5">
                            <Card
className="testimonial"
                            >
                                <CardBody>
                                    <CardTitle className="d-flex mb-3 w-75 mx-auto">
                                        <img src={profile} className=" rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                        <div className="mx-auto my-auto">
                                            <p className="mb-0 text-uppercase fw-bold">
                                                Anmol Singh
                                            </p>
                                            <p className="mb-0 fst-italic">
                                                Hired in XYZ.
                                            </p>
                                        </div>
                                    </CardTitle>

                                    <CardText className=" mt-2 p-2 text-center bg-shade overlay">
                                        "
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula lacinia turpis. Morbi vitae varius leo. "
                                    </CardText>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card 

                            >
                                <CardBody>
                                    <CardTitle className="d-flex mb-3 w-75 mx-auto">
                                        <img src={profile} className=" rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                        <div className="mx-auto my-auto">
                                            <p className="mb-0 text-uppercase fw-bold">
                                                Anmol Singh
                                            </p>
                                            <p className="mb-0 fst-italic">
                                                Hired in XYZ.
                                            </p>
                                        </div>
                                    </CardTitle>

                                    <CardText className=" mt-2 p-2 text-center bg-shade overlay">
                                        "
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula lacinia turpis. Morbi vitae varius leo. "
                                    </CardText>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>     <Card

                        >
                            <CardBody>
                                <CardTitle className="d-flex mb-3 w-75 mx-auto">
                                    <img src={profile} className=" rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                    <div className="mx-auto my-auto">
                                        <p className="mb-0 text-uppercase fw-bold">
                                            Anmol Singh
                                        </p>
                                        <p className="mb-0 fst-italic">
                                            Hired in XYZ.
                                        </p>
                                    </div>
                                </CardTitle>

                                <CardText className=" mt-2 p-2 text-center bg-shade overlay">
                                    "
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula lacinia turpis. Morbi vitae varius leo. "
                                </CardText>
                            </CardBody>
                        </Card></SwiperSlide>
                        <SwiperSlide>
                            <Card

                            >
                                <CardBody>
                                    <CardTitle className="d-flex mb-3 w-75 mx-auto">
                                        <img src={profile} className=" rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                        <div className="mx-auto my-auto">
                                            <p className="mb-0 text-uppercase fw-bold">
                                                Anmol Singh
                                            </p>
                                            <p className="mb-0 fst-italic">
                                                Hired in XYZ.
                                            </p>
                                        </div>
                                    </CardTitle>

                                    <CardText className=" mt-2 p-2 text-center bg-shade overlay">
                                        "
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula lacinia turpis. Morbi vitae varius leo. "
                                    </CardText>
                                </CardBody>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>     <Card

                        >
                            <CardBody>
                                <CardTitle className="d-flex mb-3 w-75 mx-auto">
                                    <img src={profile} className=" rounded-circle" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                                    <div className="mx-auto my-auto">
                                        <p className="mb-0 text-uppercase fw-bold">
                                            Anmol Singh
                                        </p>
                                        <p className="mb-0 fst-italic">
                                            Hired in XYZ.
                                        </p>
                                    </div>
                                </CardTitle>

                                <CardText className=" mt-2 p-2 text-center bg-shade overlay">
                                    "
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula lacinia turpis. Morbi vitae varius leo. "
                                </CardText>
                            </CardBody>
                        </Card></SwiperSlide>
                    </Swiper>
                </>
            </Container>
        </Container>

    );
}
export default MiddleSection;