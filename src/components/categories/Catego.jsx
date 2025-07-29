// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Products from "../../../public/data/product.json"
import { Link } from 'react-router';


function Category (){

    const allTags = Products?.products?.flatMap(product => product.tags);

// Use a Set to track seen slugs
const seenSlugs = new Set();

const uniqueTags = allTags.filter(tag => {
  if (!tag?.slug) return false;

  const slug = tag.slug.trim().toLowerCase();

  if (seenSlugs.has(slug)) return false;

  seenSlugs.add(slug);
  return true;
});

console.log(uniqueTags);

  
    return (
      <>
        <section className="cate-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="titleText">Seasonal Picks</h2>
            <p>Fresh arrivals handpicked for the season — enjoy the best fruits and vegetables at their peak, bursting with flavor, nutrition, and freshness straight from local farms.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={3.5}
              spaceBetween={5}
              breakpoints={{
              640: {
                slidesPerView: 4.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6.5,
                spaceBetween: 30,
              },
              1800: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
              modules={[Pagination]}
              className="cateSlider"
            >
              {uniqueTags?.map((tag)=> (
                <SwiperSlide key={tag?.slug}>
                  <Link to={`/product/${tag?.slug}`}>
                    <img src={tag?.tagImage} className="img-fluid" alt={tag?.name} />
                    <h6>{tag?.name}</h6>
                  </Link>
                </SwiperSlide>
              ))}
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    
    </>
    )
}
export default Category