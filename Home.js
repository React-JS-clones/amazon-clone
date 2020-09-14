import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                    className='home__image' 
                    src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD5388._CB406163142_.jpg" 
                    alt="amitabh" 
                />
                
                <div className='home__row'>
                    <Product 
                        id='1252325'
                        title='Airpode'
                        price="14,999"
                        image='https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_UY218_.jpg'
                        rating={4} 
                    />
                    <Product 
                        id='4512355'
                        title='Iphone 11 max pro'
                        price="1,15,999"
                        image='https://images-eu.ssl-images-amazon.com/images/I/412AHmtVU7L._AC_SY200_.jpg'
                        rating={5} 
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='5485212'
                        title='Chair'
                        price="1,799"
                        image='https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg'
                        rating={3} 
                    />
                    <Product 
                        id='6523125'
                        title='Blue collar T-shirt'
                        price="699"
                        image='https://images-eu.ssl-images-amazon.com/images/I/31TBNUGXdrL._AC_SY200_.jpg'
                        rating={3}     
                    />
                    <Product 
                        id='59452135'
                        title='Indian wear saree'
                        price="399"
                        image = 'https://images-eu.ssl-images-amazon.com/images/I/51ufe-rSduL._AC_SY200_.jpg'
                        rating={3} 
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id='4951213'
                        title='Gardening Tools'
                        price="2,399"
                        image = 'https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Lawn_x26_Garden/XCM_Manual_1230531_1214692_IN_in_lawn_garden_in_en_R1_3158944_1500x300_en_IN.jpg'
                        rating={3} 
                    />
                </div>

            </div>

        </div>
    );
}

export default Home

