import { features } from './data';

function Features() {
  return (
    <section className='features' id='features'>
      <div className='section-center features-center'>
        <div className='features-title-container'>
          <div className='section-title-bar'></div>
          <div className='features-title-text'>
            <h1 className='features-title'>
              Why choose <span className='primary-blue-400'>Scissors</span>
            </h1>
            <p className='features-title-para'>
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none
            </p>
          </div>
        </div>

        <div className='features-list'>
          {features.map((feature) => {
            return (
              <article key={feature.id} className='feature'>
                <div className='feature-icon'>
                  <img src={feature.img} alt='' />
                </div>
                <div className='feature-text'>
                  <h2>{feature.title}</h2>
                  <p>{feature.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
