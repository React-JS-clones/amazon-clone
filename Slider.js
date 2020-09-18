import React, { Component } from "react";
import Slider from "react-slick";

const photos = [
  {
    name: 'Photo 1',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg'
  },
  {
    name: 'Photo 2',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/FantasticDays_Sept/GW_sept18/P39418628_IN_WLME_OPPO_F17_Newlaunch_Tall_hero_1500x600._CB403772434_.jpg'
  },
  {
    name: 'Photo 3',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/Sep1/GW/V240911677_IN_WLME_Nokia_5_3_DesktopTallHero_1500x600_1._CB406805562_.jpg'
  },
  {
    name: 'Photo 4',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_1500x600._CB404931378_.jpg'
  },
  {
    name: 'Photo 5',
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Edict/GW/Edict_Gw_1500x600._CB403769895_.jpg'
  }
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {

      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:500,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div  className="home__image">

        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img width="100%"
                  
                  src={photo.url}
                  
                />
              </div>
            )
          })}




        </Slider>
      </div>
    );
  }
}