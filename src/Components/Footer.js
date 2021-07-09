import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Shablon-style.css';

function Footer () {

  return (
    <>
      <footer className="footer mt-3 " >
        <div className="footer-text-color mr-3">Created by: Max Brenzey</div>
        
        <SocialIcon 
          url="https://www.linkedin.com/in/maxim-brenzey-639005190/" 
          className="icon-linkedin"
          target="_blank"
          style={{ height: 32, width: 32 }}
          bgColor="white"
        />
        
        <SocialIcon 
          url="https://github.com/MaxBrenzey" 
          className="icon-linkedin"
          target="_blank"
          style={{ height: 32, width: 32 }}
          bgColor="white"
        />
      </footer>
    </>
  );
};

export default Footer;