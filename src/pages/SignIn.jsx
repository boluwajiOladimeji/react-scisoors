import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <header className='sign-in'>
        <div className='signin-center'>
          <h3>Log in with:</h3>
          <div className='signin-btn-container'>
            <button className='signin-google-btn'>
              {' '}
              <img src='../../public/google-logo.svg' alt='' />
              <span>Google</span>
            </button>
          </div>
          <div className='signin-underline'>
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <form action='' className='signin-form'>
            <input
              type='text'
              className='email-input'
              placeholder='email address or username'
            />
            <input
              type='password'
              className='password-input'
              placeholder='password'
            />
            <button className='signin-form-btn'>Log in</button>
          </form>
          <div className='signin-terms'>
            <p className='no-account'>
              Don't have an account? <Link to={'/sign-up'}>Sign up</Link>
            </p>
            <p>By signing in with an account, you agree to </p>
            <p>
              Sciccor's Terms of Service, Privacy Policy and Acceptable Use
              Policy.
            </p>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default SignIn;
