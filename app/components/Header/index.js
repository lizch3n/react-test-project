import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
        <h1>Fragrance Quiz</h1>
        <h2>basic react app, using <a href="//github.com/react-boilerplate/react-boilerplate">react boilerplate</a></h2>
    </div>
  );
}

export default Header;
