import React from 'react'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'


function BannerCarrousel() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/39/daloufi-Apple/NPI24/MEEN-iPhone_16_Amazon_Desktop_Category_banner_1500x300.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default BannerCarrousel