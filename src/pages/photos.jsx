import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './Photos.module.css';


const sun = 'https://svs.gsfc.nasa.gov/vis/a010000/a011800/a011853/faintyounsun1.jpg';
const earth = 'https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm.jpg';
const jupiter = 'https://media.cnn.com/api/v1/images/stellar/prod/210511132559-01-jupiter-gemini-hubble.jpg?q=x_0,y_0,h_1304,w_2317,c_fill/h_720,w_1280';

const Photos = () => {
   return(
      <>
      <Carousel className={styles.mainSlide}>
                <div className={styles.planets}>
                    <img src={sun} />
                </div>
                <div className={styles.planets}>
                    <img src={earth} />
                </div>
                <div className={styles.planets}>
                    <img src={jupiter} />
                </div>
            </Carousel>
            </>
   );
}

export default Photos;