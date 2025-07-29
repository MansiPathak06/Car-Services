import React from 'react';
import HeroSection from '../sections/HeroSection';
import WhyWeAreBest from '../sections/WhyWeAreBest';
import Services from '../sections/Services';
import SuccessExperience from '../sections/SuccessExperience';
import WhatWeHaveDone from '../sections/WhatWeHaveDone';
import TestimonialSection from '../sections/TestimonialSection';
import BlogSection from '../sections/BlogSection';
import ProductSection from '../sections/ProductSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <WhyWeAreBest/>
      <SuccessExperience/>
      <Services/>
      <ProductSection/>
      <WhatWeHaveDone/>
      <TestimonialSection/>
      <BlogSection/>
      <Footer/>
      
    </div>
  );
}

export default Home;
