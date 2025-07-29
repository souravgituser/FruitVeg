import { useState, useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router"
import Productcard from '../components/product/Productcard'
import { useParams } from "react-router";
import { CartContext } from "../components/contextAPI/CartContext";
import { toast, ToastContainer } from "react-toastify";
import { handleAddToCart } from "../utils/addToCart";

function Product () {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [quantity, setQuantity] = useState(1);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const [singleProduct, setSingleProduct] = useState([]);
      useEffect(() => {
          fetch("/data/product.json") 
            .then((response) => response.json())
            .then((data) => setSingleProduct(data.products))
            .catch((error) => console.error("Error loading reviews:", error));
        }, []);

        // console.log("singleProduct", singleProduct);

    const {id} = useParams();

    const productdata = singleProduct?.find((product)=> product?.id === id)

    console.log(productdata);
    const {addToCart} =  useContext(CartContext)

    return (
        <>
          <section className="productSec">
            <div className="container">
              <div className="row">
                <div className="col-md-6 sliderCol">
                  <Slider asNavFor={nav2} arrows={false} ref={slider => (sliderRef1 = slider)}>
                    {productdata?.gallery?.map((product, index) => (
                      <div key={index}>
                        <img src={product} className="zoom"/>
                      </div>
                    ))}
                  </Slider>
                  <Slider asNavFor={nav1}
                      ref={slider => (sliderRef2 = slider)}
                      slidesToShow={4}
                      swipeToSlide={true}
                      arrows={false}
                      className="navSlider"
                      focusOnSelect={true}>
                        {productdata?.gallery?.map((product, index) => (
                          <div key={index}>
                            <img src={product} />
                          </div>
                        ))}
                  </Slider>
                </div>
                <div className="col-md-6">
                  <h2 className="titleText">{productdata?.title}</h2>
                  <div className="starBox">
                    <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <div className="reviewCount">
                      <span className="reCount">(15)</span>
                    </div>
                  </div>
                  <div className="priceProduct">
                    <div className="proCut">
                      Rs. {productdata?.price?.regular}
                    </div>
                    <div className="oriPrice">
                      Rs. {productdata?.price?.sale}
                    </div>
                  </div>
                  <div className="sortDes">
                    {productdata?.shortDescription}
                  </div>
                  <div className="d-flex qtyAdd">
                  <div className="qtyBox">
                    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="form-select">
                      <option>Qty</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                  </div>
                  <div className="btn-wrap">
                      <button type='button' onClick={()=> addToCart(productdata, toast, quantity)} className="btn btn-dark">ADD to cart</button>
                      {/* <a href="#" className="btn btn-success me-0 rounded-pill">BUY NOW</a> */}
                  </div>
                  </div>
                  <div className="shareIcons">
                    <ul>
                      {productdata?.socialShare?.social.map((social, index) => (
                      <li key={index}>
                        <Link to={social?.url} target="_blank">
                          <img src={social?.icon} className="img-fluid" alt={social?.title} />
                        </Link>
                      </li>
                      ))}
                    </ul>
                  </div>
                  <div className="returnText">
                    <p>
                      <strong>Return Policy:</strong>
                      Return any fresh produce or grocery item within 24 hours of delivery for a full refund. Items must be unused, uncut, and in original packaging.
                    </p>
                  </div>
                </div>
                </div>
              </div>
              <div className="container descriptionContainer">
                <div className="row">
                  <div className="col-12">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Reviews(0)</button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <p>{productdata?.longDescription}</p>
                      </div>
                      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <p>{productdata?.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section className="secBestseller featureProduct">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="titleText">Related Product</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <ToastContainer position="bottom-right" toastClassName="custom-toast" progressClassName="custom-progress"/>
                    <ul className="d-flex ps-0 flex-wrap justify-content-between productWrap mt-2">
                      {singleProduct.slice(0, 4).map((product, index) => (
                        <Productcard key={index} onClick={()=> addToCart(product, toast)} id={product?.id} proTitle={product?.title} proImg={product?.thumbnailImage} proPrice={product?.price.sale} productBtn="ADD TO CART"/>
                      ))}
                      </ul>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
export default Product