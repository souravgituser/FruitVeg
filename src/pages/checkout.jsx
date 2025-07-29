import paymentMethoddata from '../../public/data/paymentMethodData.json';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BillingForm from "../components/BillingForm";
import PaymentMethod from "../components/PaymentMethod";
import UserContactForm from "../components/UserContactForm";
import { generateOrderId } from "../utils/generateOrderId";
import CartItems from '../components/CartItems';

function Checkout () {

  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",    
    address1: "",
    address2: "",
    city: "",
    country: "",    
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethoddata[0].id);

  const [cartItems, setCartItems] = useState(null);
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('cart'));
      if (!data) {
        navigate('/cart');
      } else {
        setCartItems(data);
      }
    }, [navigate]);
  
    // Block rendering until orderDetails is loaded or redirected
    if (!cartItems) return null;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);    
  }

  const handleSubTotal = cartItems.reduce((sum, item)=> sum + (item?.price?.sale) * item?.quantity, 0)

  const handlePlaceOrder = (e)=> {
    e.preventDefault();
    setLoading(true);
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address1 || !formData.city || !formData.country || !formData.phone || !formData.state || !formData.zip) {
      setErrorMsg("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    const orderId = generateOrderId();
    if(orderId) {
      setTimeout(() => {
        localStorage.setItem('orderDetails', JSON.stringify({
          orderId: orderId,
          shippingDetails: formData,
          cartItems: cartItems,
          selectedPaymentMethod: selectedPaymentMethod,
          totalPrice: handleSubTotal
        }));
        setLoading(false);
        navigate('/thankyou');
      }, 1000);
    }

    
    
    setErrorMsg("");
    console.log("Order placed with data:", formData, cartItems, selectedPaymentMethod); 
    console.log("Selected payment method:", selectedPaymentMethod);   
  }

    return (
      <section className="checkoutSection">
        <div className="container">
            <div className="row">
              <div className="col-md-6 leftCheckout">
                  <h2 className="mt-0">Contact</h2>
                  <form onSubmit={handlePlaceOrder}>
                    <UserContactForm handleInputChange={handleInputChange} formData={formData} />
                    <h2>Delivery</h2>
                    <BillingForm errorMsg={errorMsg} handleInputChange={handleInputChange} formData={formData} />
                    <div className="row codRow">
                        <div className="col-12">
                          <h3 className="mb-4">Payment</h3>
                          {/* <p>All transactions are secure and encrypted.</p>
                          <div className="paymentBox">
                              <div className="payboxTop">
                                Card Details
                              </div>
                              <div className="payInput">
                                <div className="row">
                                    <div className="col-12">
                                      <div className="mb-4">
                                          <input type="text" className="form-control" id="cardNumber" placeholder="Card Number"/>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-4">
                                          <input type="text" className="form-control" id="cardDate" placeholder="Expiration date (MM / YY)"/>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-4">
                                          <input type="text" className="form-control" id="secCode" placeholder="Security Code"/>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="mb-4">
                                          <input type="text" className="form-control" id="cardName" placeholder="Name on card"/>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <div className="mb-0 form-check">
                                          <input type="checkbox" className="form-check-input" id="sameShipping"/>
                                          <label className="form-check-label" for="sameShipping">Use shipping address as billing address</label>
                                      </div>
                                    </div>
                                </div>
                              </div>
                          </div> */}
                        </div>
                        <div className="col-12">
                          {paymentMethoddata.map((pmntMethod)=> (
                            <PaymentMethod 
                              key={pmntMethod.id}
                              pmntMethod={pmntMethod}
                              selectedPaymentMethod={selectedPaymentMethod}
                              handlePaymentMethodChange={handlePaymentMethodChange}  
                            />
                          ))}
                        </div>
                    </div>
                    <div className="row finalCheckout">
                        <div className="col-12">
                          <button type="submit" className="btn btn-danger w-100">
                            {loading ? (
                              "Loading..."
                            ) : (
                              "Pay Now"
                            )}
                          </button>
                        </div>
                    </div>
                  </form>
              </div>
              <div className="col-md-6 rightCheckout">
                  <div className="rightcheckoutInner h-100">
                    {cartItems?.map((cartItem)=> (
                      <CartItems key={cartItem?.id} cartItem={cartItem} />
                    ))}
                    
                    <div className="subtotalWrap d-flex flex-wrap">
                        <div className="w-50">
                          Subtotal
                        </div>
                        <div className="w-50 text-end">
                          Rs. <span>{handleSubTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="shippingWrap d-flex flex-wrap">
                        <div className="w-50">
                          Shipping
                        </div>
                        <div className="w-50 text-end">
                          Rs. <span>0.00</span>
                        </div>
                    </div>
                    <div className="totalWrap d-flex flex-wrap">
                        <div className="w-50">
                          <h3 className="my-0">Total</h3>
                        </div>
                        <div className="w-50 text-end">
                          Rs. <span>{(handleSubTotal + 0.00).toFixed(2)}</span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    )
}
export default Checkout