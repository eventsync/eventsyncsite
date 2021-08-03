import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4">
      <div className="flex items-center text-2xl font-bold">
        eventsync.io
      </div>
      <div className="hidden md:block">
        <a href="mailto:logan@eventsync.io"><Button className="text-sm font-bold">Contact</Button></a>
      </div>
    </div>
  </header>
);

export default Header;