import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import PartnerBox from "./partnerBox";
// Assets
import HTML5 from "../../assets/partners/HTML5.png";
import CSS3 from "../../assets/partners/CSS3.png";
import javascript from "../../assets/partners/javascript.png";
import mysql from "../../assets/partners/mysql.png";
import mongodb from "../../assets/partners/mongodb.png";
import react from "../../assets/partners/react.png";

class MutipleSlidesPerView extends React.Component {
  state = {
    partners: [
      {
        preview: HTML5,
        id: "1",
      },
      {
        preview: CSS3,
        id: "2",
      },
      {
        preview: javascript,
        id: "3",
      },
      {
        preview: mysql,
        id: "4",
      },
      {
        preview: mongodb,
        id: "5",
      },
      {
        preview: react,
        id: "6",
      },
    ],
  };

  render() {
    let partnersRender = null;

    if (this.state.partners) {
      partnersRender = this.state.partners.map((partners) => (
        <div key={partners.id}>
          <PartnerBox partner={partners.preview} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper {...params}>{partnersRender}</Swiper>;
  }
};
export default MutipleSlidesPerView;
