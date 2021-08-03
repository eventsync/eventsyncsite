import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Event Sync is an event managment solution launching in 2022
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Event Sync will make event/venue management hassle free for businesses, venues, and staff
          </p>
          <p className="mt-8 md:mt-12 ">
            <a href="mailto:logan@eventsync.io"><Button size="lg" className="font-bold">Business Inquires</Button></a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
