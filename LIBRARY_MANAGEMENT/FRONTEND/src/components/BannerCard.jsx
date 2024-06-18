import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import '../components/css/BannerCard.css';

import { EffectCards } from 'swiper/modules';
const BannerCard = () => {
  return (
    <div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper z-10"
      >
        <SwiperSlide><img src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide ><img src="https://templates.mediamodifier.com/5db698f47c3dc9731647a4e9/fiction-novel-book-cover-template.jpg" alt=''  className='h-[28rem] w-[24rem] rounded-[10px] '/></SwiperSlide>
        <SwiperSlide><img src="https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://marketplace.canva.com/EAFf0E5urqk/1/0/1003w/canva-blue-and-green-surreal-fiction-book-cover-53S3IzrNxvY.jpg" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://marketplace.canva.com/EAFkbi0RN1s/1/0/1003w/canva-blue-and-orange-modern-sci-fi-novel-book-cover-HfFIAd1BnL8.jpg" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMi6N6tQPl1GMXK-GR0KozP-5KYSa_Bj_ht8smQBm_A&s" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://miblart.com/wp-content/uploads/2020/01/YA-2-768x1182-1.jpeg" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6sHWhrqQisXiwt1JoKruwe1Kc041fwlwxRnIhrmTtK7PElmPRu2Wo5N0-PdmbXgEJgQ&usqp=CAU" alt="" className='h-[28rem] w-[24rem] rounded-[10px]'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard