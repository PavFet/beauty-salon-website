/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import './slider-styles.scss';
import CarouselComponent from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import SingleCarouselCard from './SingleCarouselCard';

function Carousel() {
  const cardData = [
    {
      image: '.img/facial-course.jpg',
      text: 'Facials',
    },
    {
      image: '.img/eyelash-course.jpg',
      text: 'Eyelash',
    },
  ];
  return (
    <CarouselComponent
      sx={{ width: 0.8, margin: '0 auto' }}
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
      navButtonsAlwaysVisible="true"
      autoPlay="false"
      interval="999999"
      indicatorContainerProps={{
        sx: {
          '& .css-8ucetn-MuiButtonBase-root-MuiIconButton-root': {
            color: '#A2886A', // Custom color for the indicators
          },
          '& .css-bbreus-MuiButtonBase-root-MuiIconButton-root': {
            color: 'white', // Custom color for the indicators
          },
        },
      }}
    >
      {
                   cardData.map((data) => <SingleCarouselCard data={data} key={data.text} />)
                }
    </CarouselComponent>
  );
}

export default Carousel;
