import { Link } from "react-router"


function Productcard ({proImg, proTitle, proPrice, productBtn, id, onClick}) {
    return (
        <li>
                <div className="wrap">
                  <div className="d-flex flex-wrap align-items-center w-100">
                    <div className="w-50 px-2 text-center">
                      <Link to={`/product/${id}`}>
                      <img src={proImg} className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="w-50">
                      <h5><Link to={`/product/${id}`} className="wrap">{proTitle}</Link></h5>
                      <div className="price">Rs. <span>{proPrice}</span></div>
                      <object>
                      <button onClick={onClick} className="btn btn-success rounded-pill">{productBtn}</button>
                      </object>
                    </div>
                  </div>
                  </div>
              </li>
    )
}

export default Productcard