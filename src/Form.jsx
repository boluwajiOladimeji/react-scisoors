function Form() {
  return (
    <section className='form' id='form'>
      <div className='form-center'>
        <form action='' className='form-box'>
          <input
            type='text'
            placeholder='Paste URL here'
            className='form-control url-input'
          />

          <div className='form-control domain-input'>
            <select
              name='choose domain'
              id='choose domain'
              className='domain-choice'
            >
              <option value='choose Domain'>Choose Domain</option>
              <option value='basic'>Basic</option>
              <option value='professional'>Professional</option>
              <option value='teams'>Teams</option>
            </select>

            <input
              type='text'
              placeholder='Type Alias here'
              className='form-control input-alias'
            />
          </div>

          <button className='btn-blue btn form-btn'>
            Trim Url <img src='./images/magic wand.svg' alt='' />
          </button>
        </form>
        <p className='form-text'>
          By clicking TrimURL, I agree to the
          <strong>Terms of Service, Privacy Policy</strong> and Use of Cookies.
        </p>
      </div>
    </section>
  );
}

export default Form;
