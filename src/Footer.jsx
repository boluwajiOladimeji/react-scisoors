import {
  footerSocials,
  footerWhy,
  footerSolutions,
  footerProducts,
  footerCompany,
  footerResources,
  footerFeatures,
  footerLegal,
} from './data';
import FooterLinks from './FooterLinks';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='section-center'>
        <div className='footer-center'>
          <div className='logo-socials'>
            <img
              src='./images/black-logo.svg'
              alt='logo'
              className='footer-logo'
            />

            <ul className='footer-socials'>
              {footerSocials.map((social, id) => (
                <li key={id}>
                  <img src={social.src} alt='social-logo' />
                </li>
              ))}
            </ul>
          </div>

          <FooterLinks title={'Why Scissor'} footerArray={footerWhy} />
          <FooterLinks title={'Solutions'} footerArray={footerSolutions} />
          <FooterLinks title={'Products'} footerArray={footerProducts} />
          <FooterLinks title={'Company'} footerArray={footerCompany} />
          <FooterLinks title={'Resources'} footerArray={footerResources} />
          <FooterLinks title={'Features'} footerArray={footerFeatures} />
          <FooterLinks title={'Legal'} footerArray={footerLegal} />
        </div>
        <p className='footer-text'>
          Terms of Service | Security | Scissor
          <span className='footer-date primary-blue-400'> {date}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
