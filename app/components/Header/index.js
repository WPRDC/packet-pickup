/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Navbar from 'react-bootstrap/Navbar';
import messages from './messages';
import { LINKS } from '../../settings';

import PPSLogo from '../../images/pittsburgh-public-schools-logo.png';
import WPRDCLogo from '../../images/plain_logo_rbg_cropped.svg';

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href={LINKS.PPS_HOME}>
        <img
          alt="Pittsburgh Public Schools"
          src={PPSLogo}
          height={64}
          className="d-inline-block align-middle"
        />
      </Navbar.Brand>
      <Navbar.Brand href={LINKS.WPRDC_HOME}>
        <img
          alt="Western PA Regional Data Center"
          src={WPRDCLogo}
          height={52}
          className="d-inline-block align-middle"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

Header.propTypes = {};

export default Header;
