import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
          <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""/>

            <div className="home__row">
                <Product id="12312121"
                      title='Collectible India Shiva Idol Statue - Hindu God Bholenath Shiva Idol Showpiece for Pooja Lord Blessing Shanker Deity Figurine Home Office Temple Art Decor(Size 6 x 4.5 Inches)'
                      price={"2,849"}
                      image="https://m.media-amazon.com/images/I/61sbsKUKatL._SL1280_.jpg"
                      rating={5} 
                      />
                <Product id="32467458"
                      title='Urban Forest Spencer Leather Wallet Combo Gift Set'
                      price={"1,268"}
                      image="https://m.media-amazon.com/images/I/81p6v5ZIlIS._UL1500_.jpg"
                      rating={5} 
                      />
                <Product id="97699564"
                      title='American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)'
                      price={"999"}
                      image="https://m.media-amazon.com/images/I/71+xfz79pWL._SL1500_.jpg"
                      rating={5} 
                      />
              
              
            </div>

            <div className="home__row">
                <Product id="31005789"
                      title='HP Pavilion Gaming 10th Gen Intel Core i5 Processor 16.1" (40.9 cms) FHD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/MS Office/NVIDIA GTX 1650 4GB/Shadow Black), 16-a0022TX'
                      price={"91,341"}
                      image="https://m.media-amazon.com/images/I/71FHcGAPevL._SL1498_.jpg"
                      rating={5} 
                      />
                <Product id="77745931"
                      title='Whirlpool 1.5 Ton 5 Star Inverter Split AC (Copper, 1.5T MAGICOOL PRO 5S COPR INVERTER, White)'
                      price={"33,990"}
                      image="https://m.media-amazon.com/images/I/61txU3NE6aL._SL1500_.jpg"
                      rating={5} 
                      />    
            </div>

            <div className="home__row">
                <Product id="83356110"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={"81,267"}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                      />
            </div>

          </div>
            
        </div>
    )
}

export default Home
