import React from 'react';
import { plans } from './data';

export const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <div className='section-center pricing-center'>
        <div className='pricing-title-container'>
          <div className='section-title-bar'></div>
          <h1 className='features-title pricing-title'>
            A <span className='primary-blue-400'>price perfect</span> for your
            needs.
          </h1>
        </div>
        <p className='pricing-para'>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
        <div className='prices'>
          {plans.map((plan, id) => {
            return (
              <article
                key={id}
                className={`price ${plan.active ? 'price-active' : ''}`}
              >
                <h3 className='price-plan'>{plan.plan}</h3>
                <h2 className='price-type'>{plan.type}</h2>
                <p className='price-text'>{plan.text}</p>
                <ul className='price-lists'>
                  {plan.list.map((list, i) => (
                    <li key={i} className='price-option'>
                      <img src={plan.img} alt='' /> {list}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className='pricing-btns'>
          <a href='#' className='btn pricing-btn btn-blue'>
            Get Customer Pricing
          </a>
          <a href='#' className='btn pricing-btn btn-white'>
            Select Pricing
          </a>
        </div>
      </div>
    </section>
  );
};
