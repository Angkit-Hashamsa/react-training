import React from "react";
import Title from "./title";
import { services } from "../data/data";
const Services = () => {
  return (
    <section class="section services" id="services">
      <Title mainTitle="our" subTitle="services" />
      <div class="section-center services-center">
        {services.map((service) => (
          <article class="service">
            <span class="service-icon">
              <i class={service.icons}></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">{service.serviceTitle}</h4>
              <p class="service-text">{service.serviceText}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
