import juiceBg from "../../assets/juicebg.png"

function Juice (){
    return (
        <section className="juice-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <img src={juiceBg} className="img-fluid juiceBg" alt="Juice Bg" />
            <div className="juiceText">
              <h2 className="titleText text-white text-center">Fresh Fruit Juices Now Available</h2>
              <p>Enjoy the pure taste of nature with our wide selection of freshly made fruit juices. Each bottle is packed with real fruit goodness—no added sugar, no preservatives, just vibrant flavors and essential nutrients. Whether you’re craving tropical mango, tangy orange, or a refreshing mixed blend, we’ve got the perfect juice to keep you hydrated and energized all day long.</p>
              <a href="#" className="btn btn-light rounded-pill mx-auto">ORDER NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Juice