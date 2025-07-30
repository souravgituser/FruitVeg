import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../components/contextAPI/CartContext";

function ThankYou () {
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const { updateCart } = useContext(CartContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('orderDetails'));
    if (!data || !data.orderId) {
      navigate('/cart');
    } else {
      setOrderDetails(data);
    }
  }, [navigate]);

  // Block rendering until orderDetails is loaded or redirected
  if (!orderDetails) return null;

  
  
  const { orderId, shippingDetails, selectedPaymentMethod, totalPrice, cartItems } = orderDetails;
  const {firstName, lastName, email, phone, address1, address2, city, country, state, zip} = shippingDetails;

  

  const handleContinueShop = () => {
    localStorage.removeItem('cart');
    localStorage.removeItem('orderDetails');
    updateCart([]);
    window.dispatchEvent(new Event('cartUpdated'));
    navigate('/productlisting');
  }
    return (
        <section className="thankSection">
            <div className="container bg-white thankRound border">
                <div className="row">
                    <div className="col-12">
                        <h2 className="titleText text-center">Thank You of Your Order</h2>
                        <p>We’ve received your order and it’s currently being processed. A confirmation email with your order details has been sent to your inbox.<br/>
                        You’ll receive another update once your items are on their way.<br/>
                        Need help or have questions? <a href="#">Contact our support team.</a><br/>
                        Thank you for shopping with us!
                        </p>
                    </div>
                    <div className="col-12 thankyouDetails">
                        <h3 className="text-center">Order Information</h3>
                        <table className="table order-table">
                            <tbody>
                                <tr>
                                    <th>Order Id:</th>
                                    <td>{orderId}</td>
                                </tr>
                                <tr>
                                    <th>Product Name:</th>
                                    <td>{cartItems?.map(cartItem => cartItem.title).join(', ')}</td>
                                </tr>
                                <tr>
                                    <th>Customer Name:</th>
                                    <td>{firstName} {lastName}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{email}</td>
                                </tr>
                                <tr>
                                    <th>Address:</th>
                                    <td>{address1} {address2}, {city}, {country}, {state}, {zip}</td>
                                </tr>
                                <tr>
                                    <th>Phone No:</th>
                                    <td>{phone}</td>
                                </tr>
                                <tr>
                                    <th>Shipping Price:</th>
                                    <td>Rs. 0.00</td>
                                </tr>
                                <tr>
                                    <th className="total-price-text">Total Price:</th>
                                    <td className="total-price">Rs. <span>{totalPrice.toFixed(2)}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 text-center mb-md-0 ">
                        <button type="submit" className="btn btn-success thank-you-btn  rounded-pill" onClick={handleContinueShop}>CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ThankYou