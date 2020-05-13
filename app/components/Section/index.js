/**
 *
 * Section
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Col, Row } from 'react-bootstrap';

const colWidths = { lg: 8 };

function Section({ rowProps, colProps, children, hidden }) {
  return (
    <Row
      style={{ paddingTop: '1rem' }}
      className={`justify-content-md-center ${hidden ? 'd-none' : ''}`}
      {...rowProps}
    >
      <Col {...colWidths} {...colProps}>
        {children}
      </Col>
    </Row>
  );
}

Section.propTypes = {
  rowProps: PropTypes.object,
  colProps: PropTypes.object,
  hidden: PropTypes.bool,
  children: PropTypes.node,
};

export default memo(Section);
