import React from "react";
import "./Testimonial.css";
import { useSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import  Pagination  from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.png";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Named:Ferdushi:.1. Solid technical expertise, 2. Maintains an end user focus, 3. Fast self learner, 4. Strong communication skills, 5. Dependable time and task management, 6. A Good team player.",
    },

  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <useSwiper

        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </useSwiper>
    </div>
  );
};

export default Testimonial;
