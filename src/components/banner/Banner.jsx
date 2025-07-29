import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import bannerImage from "../../assets/banner.png"
import bannerImage2 from "../../assets/banner2.png"
import bannerImage3 from "../../assets/banner3.png"

function Banner(){
    return (
    <section className="banner-sec position-relative">
        <Swiper modules={[Pagination]} pagination={{ clickable: true, }} className="mySwiper">
        <SwiperSlide>
            <div className="swiper-slide">
                    <img src={bannerImage} className="img-fluid"/>
                    <div className="container bannerWrap">
                        <div className="row">
                            <div className="col-12">
                                <h1>The Veggie Revolution</h1>
                                <p>Freshness meets flavor with every delivery. At FruitVeg, we bring you a curated selection of farm-fresh vegetables, organic herbs, and wholesome ingredients — all handpicked and packed with care. Say goodbye to grocery
                                    store hassle and hello to healthy, sustainable living. Join the Veggie Revolution and taste the difference of truly fresh food.</p>
                                <a className="btn btn-success rounded-pill" href="#">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide">
                    <img src={bannerImage2} className="img-fluid"/>
                    <div className="container bannerWrap">
                        <div className="row">
                            <div className="col-12">
                                <h1>Freshness Delivered</h1>
                                <p>We believe good food brings happiness, and nothing beats the natural sweetness of fresh fruits. Our selection includes farm-fresh kiwis, oranges, and coconuts, bursting with flavor and essential nutrients. Delivered straight to your home, our fruits promise health, taste, and convenience in one package. Experience the joy of eating fresh and embrace a lifestyle that loves you back.</p>
                                <a className="btn btn-success rounded-pill" href="#">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper-slide">
                    <img src={bannerImage3} className="img-fluid"/>
                    <div className="container bannerWrap">
                        <div className="row">
                            <div className="col-12">
                                <h1>Freshness You Deserve</h1>
                                <p>Start your day with a rainbow of health and flavor! Our curated collection of premium fruits like oranges, coconuts, and kiwis are rich in nutrients and bursting with natural taste. Perfect for smoothies, snacking, or a refreshing salad, these fruits are nature's gift to your well-being. Handpicked with care, delivered with love — because healthy living starts with what's on your plate.</p>
                                <a className="btn btn-success rounded-pill" href="#">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
      </Swiper>
      </section>
    
    )
}

export default Banner