import React from "react";
import "../components/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://www.arghamnegargroup.com/wp-content/uploads/ecommerce-768x278-1.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id="1"
              title="Killer Men's Office Laptop Messenger Bag Epilax (Blue)"
              price={89}
              rating={5}
              image="https://m.media-amazon.com/images/I/813GaSOWhcL._SX679_.jpg"
            />

            <Product
              id="2"
              title="Toaster Oven 4 Slice, Multi-function Stainless Steel Finish with Timer - Toast - Bake - Broil Settings, Natural Convection - 1100 Watts of Power, Includes Baking Pan and Rack by Mueller Austria"
              price={110}
              rating={3}
              image="https://dkstatics-public.digikala.com/digikala-products/6ef65f6fe91f120caacf5e633e483fee5d5ec93c_1647164572.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="Apple iPad Air (2022)"
              price={1199}
              rating={2}
              image="https://dkstatics-public.digikala.com/digikala-products/76d85a899c5e9e90fe36376ddabe70d45b879fcf_1606054039.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            />
            <Product
              id="4"
              title="60W (80W Peak) Portable Bluetooth Speaker with Double Subwoofer Heavy Bass, Bluetooth 5.0 Wireless 100ft Outdoor Speaker, Support FM Radio, LED Colorful Lights, Stereo Sound, for Home, Party, Travel"
              price={299}
              rating={4}
              image="https://dkstatics-public.digikala.com/digikala-products/a196c9812c77ad370d9c2ca8147962e1549f3c97_1627987489.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            />

            <Product
              id="5"
              title="The Magic of Thinking Big(Book)"
              price={29}
              rating={1}
              image="https://dkstatics-public.digikala.com/digikala-products/120600933.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="Samsung Odyssey Neo G9 | 49-inch Razer Raptor 27 |"
              price={699}
              rating={2}
              image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX679_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
