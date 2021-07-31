import React from 'react'

 function Footer() {
    return (
        <React.Fragment>
         {/* <!--footer starts--> */}
    <div className="container-fluid bg-dark px-0" style={{height:350}}>
        <a href="#pageTop" className="btn btn-dark btn-block">Back to Top</a>

        <div className="container mt-2">
            <div className="row text-white">
                <div className="col-md-3">
                 <h5>Get to know Us</h5>
                 <a href="#" className="text-white">About Us</a><br />
                 <a href="#" className="text-white">Careers</a><br />
                 <a href="#" className="text-white">Press Release</a><br />
                 <a href="#" className="text-white">Investment</a><br />
                 <a href="#" className="text-white">Offers</a><br />
                </div>
                <div className="col-md-3">
                    <h5>Connect With Us</h5>
                    <a href="#" className="text-white">Facebook</a><br />
                    <a href="#" className="text-white">Twitter</a><br />
                    <a href="#" className="text-white">Instagram</a><br />
                   
                </div>
                <div className="col-md-3">
                    <h5>Make Money With US</h5>
                 <a href="#" className="text-white">Sale On Shopify</a><br />
                 <a href="#" className="text-white">Affiliate Marketing</a><br />
                 <a href="#" className="text-white">Fulfillment Center</a><br />
                 <a href="#" className="text-white">Advertise Your Product</a><br />
                 <a href="#" className="text-white">Shopify Pay</a><br />
                </div>
                <div className="col-md-3">
                    <h5>Let Us Help You</h5>
                    <a href="#" className="text-white">Covid-19</a><br />
                    <a href="#" className="text-white">Your Account</a><br />
                    <a href="#" className="text-white">Returns</a><br />
                    <a href="#" className="text-white">Funding</a><br />
                    <a href="#" className="text-white">Help</a><br />
                </div>
            </div>

        </div>
        <div className="dropdown-divider mt-3"></div>
          <div className="row">
              <div className="col-md-12 text-center">
                <img src="assets/img/shopify2.png" height="65" width="100" alt="logo" />
              </div>
          </div>
        
    </div>


    {/* <!--footer ends--> */}


        </React.Fragment>
    )
}
export default Footer;