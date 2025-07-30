import { useContext, useEffect, useState } from "react";
import removeIcon from "../assets/delCart.png";
import { CartContext } from "../components/contextAPI/CartContext";
import { Link } from "react-router";

function Cart() {
  const { cart, updateCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState({});

  // Initialize quantities from cart
  useEffect(() => {
    const initialQuantities = {};
    cart?.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleMinusQuantity = (id) => {
    setQuantities((prev) => {
      const newQty = prev[id] > 1 ? prev[id] - 1 : 1;

      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCart(updatedCart);

      return { ...prev, [id]: newQty };
    });
  };

  const handlePlusQuantity = (id) => {
    setQuantities((prev) => {
      const newQty = prev[id] + 1;

      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCart(updatedCart);

      return { ...prev, [id]: newQty };
    });
  };

  const handleRemoveItem = (id) => {
    console.log(cart)
    const newCart = cart.filter(item => item.id !== id);    
    localStorage.setItem('cart', JSON.stringify(newCart));
    updateCart(newCart);
  }

  const getCartCount = cart?.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const getCartTotal = cart?.reduce(
    (acc, item) => acc + (item.quantity || 1) * item?.price?.sale,
    0
  );

  return (
    <>
      <section className="cartSec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="titleText text-center">Cart</h2>
            </div>
            <div className="col-12">
              <div className="cartTop d-flex flex-wrap align-items-center">
                <div className="col-6">
                  <h3>Your cart {getCartCount}</h3>
                </div>
                <div className="col-6 text-end">
                  <a href="#">Continue shopping</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          {getCartCount !== 0 && (
            <div className="row toptableRow">
              <div className="col-7">
                <p>PRODUCTS</p>
              </div>
              <div className="col-3">
                <p>QUANTITY</p>
              </div>
              <div className="col-2 text-end">
                <p>TOTAL</p>
              </div>
            </div>
          )}

          {getCartCount === 0 ? (
            <div className="alert alert-danger" role="alert">
              Your Cart is empty!
            </div>
          ) : cart.map((item) => (
              <div className="row carttableRow align-items-center" key={item.id}>
                <div className="col-7">
                  <div className="cartProductdetails d-flex align-items-center">
                    <div className="cartMedia">
                      <img
                        src={item?.thumbnailImage}
                        className="img-fluid"
                        alt="Cart item"
                      />
                    </div>
                    <div className="cartdetails">
                      <h4>{item?.title}</h4>
                      <div className="cartsinPrice">
                        Rs. <span>{item?.price?.sale.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3 cartQtyWrap">
                  <div className="input-group">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleMinusQuantity(item.id)}
                      type="button"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="form-control text-center bg-transparent"
                      value={quantities[item.id] || 1}
                      readOnly
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => handlePlusQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="deleteIcon" onClick={()=> handleRemoveItem(item?.id)}>
                    <img src={removeIcon} className="img-fluid" alt="Remove" />
                  </div>
                </div>
                <div className="col-2 text-end">
                  <div className="profinalPrice">
                    Rs.{" "}
                    <span>
                      {(item?.price?.sale * (quantities[item.id] || 1)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {getCartCount !== 0 && (
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="checkoutCart">
                  <div className="estiBlock">
                    Estimated total{" "}
                    <span>
                      Rs. <span className="totalPrice">{getCartTotal.toFixed(2)}</span>
                    </span>
                  </div>
                  <div className="statmentText">
                    Taxes, discounts and shipping calculated at checkout.
                  </div>
                  <div className="text-end checkoutBtn">
                    <Link to='/checkout' className="btn btn-dark">Check Out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}  
      </section>
    </>
  );
}

export default Cart;
