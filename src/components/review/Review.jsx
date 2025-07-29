import React, { useEffect, useState } from "react";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// import API_URL from "./review.json"


function Review () {
     const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/data/review.json") 
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error loading reviews:", error));
  }, []);

    function renderStars(rating = 0, maxStars = 5) {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        stars.push(
          <i
            key={i}
            className={`fa fa-star${i <= rating ? "" : " text-muted"}`}
            style={{ marginRight: 2 }}
          ></i>
        );
      }
      return <span className="revw-rating mt-0">{stars}</span>;
    }

    return (
      <>
        <section className="review-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="titleText">What Customer Say</h2>
                <p className="mb-0 mx-auto">Our customers are at the heart of everything we do. Read what they have to say about the quality, freshness, and service they’ve come to love.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">


                  <Swiper
            slidesPerView={1}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1800: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="reviewSlider"
          >

            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                      <div className="reviewBox">
                        <div className="reviewMedia text-center">
                          <img src={review.image} className="img-fluid" alt={review.name}/>
                          <div className="starsWrap">
                            {renderStars(review?.rating

                            )}
                          </div>
                        </div>
                        <div className="reviewText">
                          <h5>— {review.name}</h5>
                          <p>{review.review}</p>
                        </div>
                      </div>
              </SwiperSlide>
         ))}

{/*         
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg2} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Ravi S.</h5>
                    <p>The fruits were incredibly fresh and juicy — way better than anything I’ve bought from the local market.</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg3} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Anjali R.</h5>
                    <p>The fruits were incredibly fresh and flavorful — like they were picked just hours before delivery.</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg4} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Priya M.</h5>
                    <p>I’ve been ordering regularly, and the produce always arrives on time and in great condition.</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg1} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Vikram T.</h5>
                    <p>The vegetables are crisp, clean, and stay fresh for days. Even my kids noticed the difference in taste!</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg2} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Ravi S.</h5>
                    <p>The fruits were incredibly fresh and juicy — way better than anything I’ve bought from the local market.</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg3} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Anjali R.</h5>
                    <p>The fruits were incredibly fresh and flavorful — like they were picked just hours before delivery.</p>
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
                <div className="reviewBox">
                  <div className="reviewMedia text-center">
                    <img src={userImg4} className="img-fluid" alt="User"/>
                    <div className="starsWrap">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="reviewText">
                    <h5>— Priya M.</h5>
                    <p>I’ve been ordering regularly, and the produce always arrives on time and in great condition.</p>
                  </div>
                </div>
        </SwiperSlide> */}
      </Swiper>
          </div>
        </div>
      </div>
    </section>

    
    </>
    )
}

export default Review