import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Coursel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{
              height: "400px",
              width: "400px",
              padding: "50 px",
              margin: "50px",
            }}
            src="https://www.burgerking.com.tr/cmsfiles/campaigns/big-king-ailesi-genisledi.jpg?v=305"
            alt=""
          />
          <Carousel.Caption>
            <h3>BigKing Menuler</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "400px",
              width: "400px",
              padding: "50 px",
              margin: "50px",
            }}
            src="https://www.burgerking.com.tr/cmsfiles/campaigns/burger-king-onemle-doyurur.jpg?v=305"
            alt=""
          />
          <Carousel.Caption>
            <h3>EkonomiKings</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              height: "400px",
              width: "400px",
              padding: "50 px",
              margin: "50px",
            }}
            src="https://www.burgerking.com.tr/cmsfiles/campaigns/ne-yesem-diye-dusunme-favburger-i-ye-gitsin.jpg?v=305"
            alt=""
          />
          <Carousel.Caption>
            <h3>FavBurger</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Coursel;
