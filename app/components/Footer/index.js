/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-bootstrap';
import messages from './messages';
import Section from '../Section';

import WPRDCLogo from '../../images/plain_logo_rbg_cropped.svg';
import { LINKS } from '../../settings';

const PrivacyNote = styled.p`
  color: dimgray;
  font-style: italic;
  margin-top: 0;
`;

function Footer() {
  return (
    <Section>
      <Row>
        <Col xs={12}>
          <p>
            COVID-19 (the new coronavirus) has challenged all of us. Parents and
            adult caregivers are vital for ensuring children continue to thrive
            during these tough times. Sharing your experience can help ensure
            resources are accessible, especially where they will do the most
            good.
          </p>
          <p>
            <b>
              Please take the{' '}
              <a href="https://www.pediatrics.pitt.edu/family-strengths-survey">
                Family Strengths Survey
              </a>{' '}
              and help improve COVID-19 response efforts.
            </b>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <a href={LINKS.WPRDC_HOME}>
            <img src={WPRDCLogo} alt="western pa regional data center" />
          </a>
        </Col>
        <Col md={7}>
          <div style={{ textAlign: 'center' }}>
            <p>
              <FormattedMessage {...messages.copyright} />
            </p>
            <PrivacyNote>
              <FormattedMessage {...messages.privacyBrief} />
            </PrivacyNote>
          </div>
        </Col>
      </Row>
    </Section>
  );
}

Footer.propTypes = {};

export default memo(Footer);
