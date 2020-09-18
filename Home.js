import React from 'react';
import './Home.css';
import Product from './Product';
// import './Slider.scss';

function Home() {

    let sliderArr = [1, 2, 3, 4, 5]

    return (
        <div className='home'>
            <div className='home__container'>
                {/* <div className='slider' >
                    {
                        sliderArr.map((item, index) => {
                            return (
                                <div key={index} className='slide'  >
                                    {item}
                                </div>
                            )
                        })
                    }
                    <button id="goLeft" >left</button>
                    <button id="goRight" >right</button>
                </div> */}
                <img 
                    className='home__image' 
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD5388._CB406163142_.jpg" 
                    alt="amitabh" 
                />

                <div className='home__row'>
                    <Product
                        id='1'
                        title='Airpode: Wireless Earbuds Bluetooth 5.0 Headphones HD Stereo Noise Reduction in-Ear Earbuds Sports Ear Bud with Wireless Charging Case Auto Pairing for Earphones Apple Airpods/iPhone/Android'
                        price={14999.23}
                        image='https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_UY218_.jpg'
                        rating={4}
                    />
                    <Product
                        id='2'
                        title='Iphone 11 max pro: 5.8-inch (14.7 cm) Super Retina XDR OLED display
                        Water and dust resistant (4 meters for up to 30 minutes, IP68), Triple-camera system with 12MP Ultra Wide.'
                        price={115999.56}
                        image='https://images-eu.ssl-images-amazon.com/images/I/412AHmtVU7L._AC_SY200_.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='3'
                        title='Chair: AmazonBasics Upholstered, Low-Back, Adjustable, Swivel Office Desk Chair, Black'
                        price={1799}
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg'
                        rating={3}
                    />
                    <Product
                        id='4'
                        title='Blue collar T-shirt: Derminpro Mens Lightweight Golf Polo Shirts Short Sleeve Quick Dry Performance Athletic T-Shirts'
                        price={699}
                        image='https://images-eu.ssl-images-amazon.com/images/I/31TBNUGXdrL._AC_SY200_.jpg'
                        rating={3}
                    />
                    <Product
                        id='5'
                        title='Indian wear saree: Sanskruti India Womens Indian Ethnic Traditional Banarasi Art Silk Saree Sari Wrap Fabric Dress Drape'
                        price={399}
                        image='https://images-eu.ssl-images-amazon.com/images/I/51ufe-rSduL._AC_SY200_.jpg'
                        rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='6'
                        title='Gardening Tools: New Perspectives HTML5 and CSS3: Comprehensive'
                        price={2399}
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Lawn_x26_Garden/XCM_Manual_1230531_1214692_IN_in_lawn_garden_in_en_R1_3158944_1500x300_en_IN.jpg'
                        rating={3}
                    />
                </div>
                <img
                    className='home__image2'
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg"
                    alt="amitabh"
                />
                <div className='home__row'>
                    <Product
                        id='7'
                        title='Bedsheets: SheetKart Floral 144 TC Cotton Single Bedsheet with 1 Pillow Cover, gray'
                        price={599}
                        image='https://m.media-amazon.com/images/I/71YITNn7NwL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={4}
                    />
                    <Product
                        id='8'
                        title='Clocks: Seiko Pendulum Clock (52.5 cm x 21.5 cm x 6.8 cm, Brown, QXC213B)'
                        price={8000}
                        image='https://m.media-amazon.com/images/I/41ZivdN-pyL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='9'
                        title='Wall hangings: Craftter Set of 3 Bright Gold Color Circles Metal Wall Décor Hanging Large Wall Sculpture Art'
                        price={4999}
                        image='https://images-na.ssl-images-amazon.com/images/I/81qqE%2BnbndL._SL1500_.jpg'
                        rating={4}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='10'
                        title='Artifical Mats: HOMY DECOR 25MM Super High Density, Artificial Grass, Artificial Grass Carpet, Mat for Balcony, Lawn mat, Floor Mat, Doormat, Mat for Terrace, Roof Mats'
                        price={7999}
                        image='https://images-na.ssl-images-amazon.com/images/I/911rlYR392L._SL1500_.jpg'
                        rating={4}
                    />
                    <Product
                        id='11'
                        title='Paintings: Kyara arts Multiple Frames, Beautiful red Buddha Wall Painting for Living Room, Bedroom, Office, Hotels, Drawing Room Wooden Framed Digital Painting (50inch x 30inch).'
                        price={15999}
                        image='https://m.media-amazon.com/images/I/916mCtIkdjL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                </div>
                <img
                    className='home__image2'
                    src="https://in-media.apjonlinecdn.com/wysiwyg/toplaptopdeals/Homepage_banner_desktop.jpg"
                    alt="amitabh"
                />
                <div className='home__row'>
                    <Product
                        id='12'
                        title='HP Elite Dragonfly'
                        price={250000}
                        image='https://in-media.apjonlinecdn.com/catalog/product/cache/c5b0e6136a6dd7f7d91d8b889ed40f35/e/m/empire_13_galaxyblue_t_ircam_nonodd_nonfpr_dragonfly_coreset_tent_1.png'
                        rating={5}
                    />
                    <Product
                        id='13'
                        title='HP Spectre x360 - 13-aw0188tu'
                        price={190000}
                        image='https://in-media.apjonlinecdn.com/catalog/product/cache/c5b0e6136a6dd7f7d91d8b889ed40f35/r/a/rainer_13_wlan_poseidonblue_t_ircam_nonodd_nonfpr_spectre_coreset_tent_3.png'
                        rating={5}
                    />
                    <Product
                        id='14'
                        title=' HP Pavilion Gaming - 15-dk0269tx'
                        price={75000}
                        image='https://in-media.apjonlinecdn.com/catalog/product/cache/c5b0e6136a6dd7f7d91d8b889ed40f35/c/y/cyprus_front_purple_1_2.png'
                        rating={4}
                    />
                    <Product
                        id='15'
                        title='HP 250 G7 Notebook PC'
                        price={50000}
                        image='https://in-media.apjonlinecdn.com/catalog/product/cache/c5b0e6136a6dd7f7d91d8b889ed40f35/1/S/1S5E9PA-1_T1597128565.png'
                        rating={4}
                    />

                </div>

            </div>

        </div>
    );
}

export default Home;

