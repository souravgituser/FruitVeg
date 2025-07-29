import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Banner from '../components/banner/Banner';

import Discount from '../components/discount/Discount';
import ShopCategories from '../components/shopcategories/Shopcategories';
import Productcard from './../components/product/Productcard';
import Review from './../components/review/Review';
import Juice from './../components/juice/Juice';
import Newsletter from './../components/newsletter/Newsletter';
import { handleAddToCart } from "../utils/addToCart";
import { CartContext } from "../components/contextAPI/CartContext";
import Category from "../components/categories/Catego";
// import Product from "../pages/product.jsx"


const Home = () => {
        const [products, setProduct] = useState([]);
        const sectionRef = useRef(null);

        useEffect(() => {
            fetch("/data/product.json") 
              .then((response) => response.json())
              .then((data) => setProduct(data.products))
              .catch((error) => console.error("Error loading reviews:", error));
          }, []);

          console.log('products', products);

          const {addToCart} =  useContext(CartContext)

          const handleScroll=() => {
            sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
          }
          

    return (
        <>
        <Banner handleScroll={handleScroll} />
        <Category/>
        <Discount/>

        <section className="sec-product" ref={sectionRef}>
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                    <h2 className="titleText">Choose Your Product</h2>
                    <p className="mb-0">Browse our handpicked selection to find the freshest and finest just for you.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <ToastContainer position="bottom-right" toastClassName="custom-toast" progressClassName="custom-progress"/>
                    <ul className="d-flex ps-0 flex-wrap justify-content-between productWrap">
                    {products.slice(0, 12).map((product, index) => (
                    <Productcard key={index} onClick={()=> addToCart(product, toast)} id={product?.id} proTitle={product?.title} proImg={product?.thumbnailImage} proPrice={product?.price.sale} productBtn="ADD TO CART"/>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>

        <ShopCategories/>
        <Review/>
        <Juice/>
        <Newsletter/>
        </>
    )
}

export default Home