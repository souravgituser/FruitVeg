import whiteLogo from "../../assets/logo-white.png"
import fb from "../../assets/fb.png"
import tw from "../../assets/tw.png"
import ins from "../../assets/ins.png"
import In from "../../assets/in.png"
import { Link } from "react-router"

function Footer () {
    return (
        <footer className="footer text-dark">
  <div className="container">
    <div className="row gy-4">
        
      <div className="col-md-12 col-lg-5">
        <Link to="/">
          <img src={whiteLogo} className="img-fluid" alt="logo"/>
        </Link>
        <p>
          FruitVeg brings you the freshest, most vibrant selection of fruits and vegetables – always bold in flavor, rich in nutrition, and easy on your pocket. Whether you're planning a hearty meal, a refreshing juice, or just stocking up on everyday essentials, our handpicked produce is chosen to suit your lifestyle. Grown with care and delivered with freshness, FruitVeg is where health meets taste – every single day.
        </p>
       
      </div>
      
      <div className="col-6 col-md-4 col-lg-2">
        <h5>Products</h5>
        <ul className="list-unstyled">
          <li><Link to="/productlisting">Fresh Fruits</Link></li>
          <li><Link to="/productlisting">Leafy Greens</Link></li>
          <li><Link to="/productlisting">Root Vegetables</Link></li>
          <li><Link to="/productlisting">Organic Picks</Link></li>
          <li><Link to="/productlisting">All Product</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-4 col-lg-2">
        <h5>Our Service</h5>
        <ul className="list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/productlisting">Products</Link></li>
          <li><Link to="#">Service</Link></li>
          <li><Link to="contactus">Contact</Link></li>
        </ul>
      </div>

      <div className="col-md-4 col-lg-3">
        <h5>Contact</h5>
        <address>
          FruitVeg Headquarters<br/>
          123 Style Avenue<br/>
          Los Angeles<br/>
          CA 90001<br/>
          <strong>Phone:</strong> +1 (800) 123-4567<br/>
          <strong>Email:</strong> support@FruitVeg.com<br/>
          <strong>Hours:</strong> Mon–Fri, 9am – 6pm (PST)
        </address>
      </div>
    </div>

    <div className="copyText">
      <p className="mb-0 w-100">&copy; 2025 FruitVeg. All rights reserved.</p>
      <ul className="socialLinks p-0">
            <li>
              <a href="https://www.facebook.com/">
                <img src={fb} className="img-fluid"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src={tw} className="img-fluid"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src={ins} className="img-fluid"/>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/">
                <img src={In} className="img-fluid"/>
              </a>
            </li>
          </ul>
    </div>
    
  </div>
</footer>
    )
}

export default Footer