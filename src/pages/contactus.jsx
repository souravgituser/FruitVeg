const ContactUs = () => {
    return (
            <section class="contactSection">
                <div class="container">
                <div class="row g-4 align-items-end">
                    <div class="col-12 col-md-6 contact-info">
                    <h2 class="titleText">CONTACT US</h2>
                    <p><strong>Email Address:</strong> galaxyheadphone@gmail.com</p>
                    <p><strong>Phone Number:</strong> +91987654321</p>
                    <p class="d-flex flex-wrap"><strong>Address:</strong><span>24 Abeel Rd<br/>Monroe, NJ 08831</span></p>
                    <iframe 
                        src="https://maps.google.com/maps?q=24%20Abeel%20Rd,%20Monroe,%20NJ%2008831&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                    
                    <div class="col-12 col-md-6 contactForm">
                    <form>
                        <div class="mb-3">
                        <input id="fullname" type="text" class="form-control" placeholder="Full Name" required/>
                        </div>
                        <div class="mb-3">
                        <input id="emailcontact" type="email" class="form-control" placeholder="Email Address" required/>
                        </div>
                        <div class="mb-3">
                        <input id="phonecontact" type="text" class="form-control" placeholder="Phone Number" required/>
                        </div>
                        <div class="mb-3">
                        <textarea id="textdes" class="form-control" rows="10" placeholder="Message" required></textarea>
                        </div>
                        <div class="text-end">
                        <button id="submitform" type="submit" class="btn btn-danger">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
    );
};

export default ContactUs