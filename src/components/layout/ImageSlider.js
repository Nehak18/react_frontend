import React from 'react'

function ImageSlider() {
    return (
        <React.Fragment>
          {/* <!--image slider starts--> */}
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="assets/img/slider5.jpg" height="500px" className="d-block w-100" alt="slider1" />
                </div>
                <div className="carousel-item">
                    <img src="assets/img/slider2.jpg" height="500px" className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                    <img src="assets/img/slider1.jpg" height="500px" className="d-block w-100" alt="slider3" />
                </div>
                <div className="carousel-item">
                    <img src="assets/img/slider4.jpg" height="500px" className="d-block w-100" alt="slider4" />
                </div>
                <div className="carousel-item">
                    <img src="assets/img/slider3.jpg" height="500px" className="d-block w-100" alt="slider5" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        {/* <!--image slider ends--> */}
        
        </React.Fragment>
    );
}
export default ImageSlider;