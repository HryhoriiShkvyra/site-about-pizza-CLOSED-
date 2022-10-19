import React from "react";
import classes from './News.module.css'
import Pineapple from '../../Assets/pizza/Pineapple on pizza.jpg'



// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
        <div
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {data.map(({id, title, body, image}) => {
                return(
                    <div className={classes.news} key={id}>
                        <div className={classes.newsDescription}>
                            <div className={classes.title}>{title}</div>
                            <div className={classes.description}>{body}</div>
                        </div>
                        <img className={classes.image} src={Pineapple}/>
                    </div>
                )
            })}
        </div>
    );
};


export default News;