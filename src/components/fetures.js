import React from "react";
import Title from "./title";
import { featuredTorus } from "../data/data";
const Featured = () => {
  return (
    <section class="section" id="tours">
      <Title mainTitle="featured" subTitle="tours" />
      <div class="section-center featured-center">
        {featuredTorus.map((tours) => (
          <article class="tour-card">
            <div class="tour-img-container">
              <img src={tours.img} class="tour-img" alt="" />
              <p class="tour-date">{tours.tourDate}</p>
            </div>
            <div class="tour-info">
              <div class="tour-title">
                <h4>{tours.tourTitle}</h4>
              </div>
              <p>{tours.tourDes}</p>
              <div class="tour-footer">
                <p>
                  <span>
                    <i class={tours.icon}></i>
                  </span>
                  {tours.country}
                </p>
                <p>{tours.days}</p>
                <p>{tours.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Featured;
