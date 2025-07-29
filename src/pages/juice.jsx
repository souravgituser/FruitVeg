import React, { useContext, useEffect, useState } from "react";
import Productcard from "../components/product/Productcard";
import { ToastContainer } from "react-toastify";
import JuiceCard from "../components/juice/juiceCerd";

function Juice (){
    const [products, setProduct] = useState([]);
            useEffect(() => {
                fetch("/data/product.json") 
                  .then((response) => response.json())
                  .then((data) => setProduct(data.products))
                  .catch((error) => console.error("Error loading reviews:", error));
              }, []);
    return (
        <>
            <section className="sec-product">
            <div className="container">
                <div className="row">
                <div className="col-12 text-center">
                    <h2 className="titleText">Refreshing Juices Coming Your Way</h2>
                    <p className="mb-0">Browse our handpicked selection to find the freshest and finest just for you.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <ToastContainer />
                    <ul className="d-flex ps-0 flex-wrap justify-content-between productWrap">
                    {products.slice(20, 24).map((product, index) => (
                    // 
                    <JuiceCard key={index} juiceImg={product?.thumbnailImage} juiceTitle={product?.title} jiuceDetails={product?.shortDescription}></JuiceCard>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Juice