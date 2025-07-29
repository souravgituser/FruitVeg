import newsVegi from  "../../assets/news.png"

function Newsletter () {
    return (
      <section className="news-section" id="NewsSection">
      <div className="container light-green">
        <div className="row align-items-center">
          <div className="col-md-12 col-xl-5">
            <div className="newsBox">
              <div className="newsInner">
                <h2>Fresh News, Just for You</h2>
                <p>Get juicy updates, tasty deals, and farm-fresh news sent right to you.</p>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <a className="input-group-text" type="submit" id="basic-addon2">Stay Connected</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-xl-7">
            <img src={newsVegi} className="img-fluid" alt="Veggie" />
          </div>
        </div>
      </div>
    </section>
    )
}
export default Newsletter