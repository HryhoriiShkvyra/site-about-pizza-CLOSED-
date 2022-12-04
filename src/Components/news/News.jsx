import React from "react";
import classes from './News.module.css'
import Pineapple from '../../Assets/pizza/Pineapple on pizza.jpg'


// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation.css';
// import 'swiper/css/scrollbar.css';
// import 'swiper/css/autoplay.css';


const News = () => {

    const data = [
        {
            id: 1,
            title: 'Product name or specials deal',
            body: 'description',
            image: {Pineapple}
        },
        {
            id: 2,
            title: 'Product name or specials deal',
            body: 'description',
            image: {Pineapple}
        },
        {
            id: 3,
            title: 'Product name or specials deal',
            body: 'description',
            image: {Pineapple}
        },
    ]

    return(
        <div className={classes.news}>
            <Swiper className="container"
                modules={[Pagination, Autoplay]}  
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                loop={true}
                >
                {data.map(({id, title, body, image}) => {
                    return(
                        <SwiperSlide key={id}>
                            <div  className={classes.imageBox}>
                                <img className={classes.image} src={Pineapple}/>
                            </div>
                            <div className={classes.orderBtnBox}>
                            <button className={classes.orderBtn}>Order</button>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
        
    );
};


export default News;