import React from 'react';
import CarouselBox from '../Components/CarouselBox';
import OurServises from '../Components/OurServises';
import GridImages from '../Components/GridImages';
import LongImageHome from '../Components/LongImageHome';
import Footer from '../Components/Footer';


export default function Home() {
  return (
    <div>
      <CarouselBox />
      <OurServises />
      <GridImages />
      <LongImageHome />
      <Footer />
    </div>
  );
}
