import React, { useEffect, useState, useContext } from "react";
import Productcard from '../components/product/Productcard.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from './../components/contextAPI/CartContext';
import { useParams } from "react-router";

function ProductListing () {

    const searchParams = new URLSearchParams(location.search);
    const categorySlug = searchParams.get("category");

    console.log('categoryId', categorySlug);

     const [singleProduct, setSingleProduct] = useState([]);
           useEffect(() => {
                fetch("/data/product.json")
                .then((response) => response.json())
                .then((data) => {
                    // Filter products by category slug
                    const filteredProducts = categorySlug
                    ? data.products.filter(
                        (product) => product.category?.slug === categorySlug
                        )
                    : data.products;

                    setSingleProduct(filteredProducts);
                })
                .catch((error) => console.error("Error loading products:", error));
            }, [categorySlug]);

            console.log('singleProduct', singleProduct);

            const {addToCart} =  useContext(CartContext)
    return (
        <>
            <section className="sec-product">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        {categorySlug ? (<h2 className="titleText" style={{textTransform : "capitalize"}}>Display Product From {categorySlug} </h2>) : (<h2 className="titleText">All Products</h2>)}
                        
                        <p className="mb-0">Browse our handpicked selection to find the freshest and finest just for you.</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <ul className="d-flex ps-0 flex-wrap justify-content-between productWrap">
                            <ToastContainer />
                            {singleProduct.slice(0, 20).map((product, index) => (
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
export default ProductListing