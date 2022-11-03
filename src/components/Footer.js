function Footer() {
  function click(id) {
    console.log(`${id} clicked!`);
    return (
      <div
        id='active'
        style={{
          content: '',
          borderTop: '0.1rem solid #67C587',
          width: '1.5rem',
        }}
      ></div>
    );
  }
  return (
    <div className='icon-container'>
      <img
        className='icon'
        onClick={() => click('home')}
        id='home'
        src='bx_home-alt.png'
        alt='house icon'
      />
      <img
        className='icon'
        onClick={() => click('profile')}
        id='profile'
        src='person.png'
        alt='head and shoulders icon'
      />
      <img
        className='icon'
        onClick={() => click('progress')}
        id='progress'
        src='ri_numbers-fill.png'
        alt='bar graph icon'
      />
      <img
        className='icon'
        onClick={() => click('money')}
        id='money'
        src='dashicons_money-alt.png'
        alt='dollar sign icon'
      />
      <img
        className='icon'
        onClick={() => click('settings')}
        id='settings'
        src='carbon_settings.png'
        alt='gear icon'
      />
    </div>
  );
}

export default Footer;
