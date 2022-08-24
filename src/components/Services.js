import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return(
    <section className="mx-auto px-4 grid gap-2 grid-cols-3">
      <ServiceCard key='1' service='1' />
      <ServiceCard key='2' service='2' />
      <ServiceCard key='3' service='3' />
    </section>
  )
}

export default Services;