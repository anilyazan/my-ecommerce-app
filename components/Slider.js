// components/SimpleSlider.js
"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  max-width: 800px; /* Slider'ın maksimum genişliği */
  margin: 0 auto; /* Sayfanın ortalanması için */
`;

const Slide = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5; /* Slider arka plan rengi */
`;

const SimpleSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setSlides(json.slice(0, 3))) // İlk 3 ürünü slider'a ekleyelim
      .catch(error => console.error('Hata:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {slides.map(slide => (
          <Slide key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  );
}

export default SimpleSlider;
