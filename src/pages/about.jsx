import aboutVeg from "../assets/about.jpg"
function AboutUs () {
    return (
        <section class="aboutSec">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="titleText">About Us</h2>
        <p>Welcome to <strong>FruitVeg</strong> — Your trusted source for fresh fruits and vegetables.
          At FruitVeg, we don’t just deliver produce; we deliver health and happiness. Our mission is to make fresh, farm-to-table produce easily accessible to every household, every day.</p>
        
        <h3>Our Story</h3>
        <p>Founded by passionate food lovers and health enthusiasts, FruitVeg was built with a simple goal: to provide high-quality, farm-fresh fruits and vegetables at affordable prices. We work directly with farmers to ensure that you receive the best, naturally grown produce without compromise.</p>
        
        <h3>What We Offer</h3>
        <p>From seasonal fruits to green, leafy vegetables, our collection covers everything you need for a healthy lifestyle. We offer 100% fresh produce, carefully handpicked, cleaned, and packed with love for your convenience.</p>
        
        <h3>Our Vision</h3>
        <p>We believe healthy eating starts with fresh ingredients. Our vision is to empower communities with easy access to fresh, nutritious produce, delivered straight to your doorstep. FruitVeg is your partner in creating wholesome meals for a better tomorrow.</p>
      </div>
      
      <div class="col-md-6">
        <img src={aboutVeg} class="img-fluid" alt="About FruitVeg"/>
      </div>
    </div>
  </div>
</section>
    )
}
export default AboutUs