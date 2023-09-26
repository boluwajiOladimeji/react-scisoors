function Views() {
  return (
    <section className='views'>
      <div className='section-center views-center'>
        <h1 className='views-title'>
          One Stop. <br />
          Four <span className='primary-blue-400'>Possibilities.</span>
        </h1>
        <ul className='views-list'>
          <li className='view-num'>
            3M <span className='view-subtitle'>Active users</span>
          </li>
          <li className='view-num'>
            60M
            <span className='view-subtitle'>
              Links & QR <br />
              codes created
            </span>
          </li>
          <li className='view-num'>
            1B
            <span className='view-subtitle'>
              Clicked & Scanned <br />
              connections
            </span>
          </li>
          <li className='view-num'>
            300k <span className='view-subtitle'>App Integrations</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Views;
