import vegImg from "../../assets/veg.png"
import draImg from "../../assets/dra.png"
import oreImg from "../../assets/ore.png"
import DiscountCard from './Discountcard.jsx'

function Discount(){
    return (
        <section className="discount-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="titleText">Mega Sale is On!</h2>
            <p className="mb-0">Up to 60% off across all categories. Grab your favorites while the deals last!</p>
          </div>
        </div>
        <div className="container discount-card">
          <div className="row">
            <DiscountCard disImg={vegImg} colorBtn={"green-text"} colorBg={"card-green"} promoTitle="Discount Upto 60%" promoText="Up to 50% off across all categories. Grab your favorites product while the deals last. Don’t Miss." />
            <DiscountCard disImg={oreImg} colorBtn={"orange-text"} colorBg="card-orange" promoTitle="Order Fresh Orange" promoText="Bursting with juicy sweetness with vitamin C our handpicked fresh oranges." />
            <DiscountCard disImg={draImg} colorBtn={"pink-text"} colorBg="card-pink" promoTitle="Discount Upto 60%" promoText="Exotic, refreshing, and rich in antioxidants — enjoy the vibrant taste of fresh dragon fruit." />
          </div>
        </div>
      </div>
    </section>
    )
}
export default Discount