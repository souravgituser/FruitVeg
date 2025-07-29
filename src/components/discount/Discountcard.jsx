import { Link } from 'react-router';
function DiscountCard ({promoTitle, promoText, disImg, colorBg, colorBtn}) {
    return(
        <div className="col-md-4">
                  <div className= {`promo-card text-white position-relative ${colorBg}`}>
                    <div className="disCardtext">
                      <div className="promo-title">{promoTitle}</div>
                      <div className="promo-text">
                        {promoText}
                      </div>
                      <Link to="/productlisting" className={`btn-white ${colorBtn}`}>SHOP NOW</Link>
                    </div>
                    <div className="discardimg">
                      <img src={disImg} alt="Vegetables"/>
                    </div>
                  </div>
                </div>
    )
}
export default DiscountCard