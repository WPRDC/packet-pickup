/**
 *
 * ErrorCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import messages from './messages';

const StyledCard = styled(Card)`
  margin: 0 0 1rem 0;
`;

function ErrorCard() {
  return (
    <StyledCard bg="danger" text="white">
      <Card.Header>
        <FormattedMessage {...messages.header} />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <FormattedMessage {...messages.text} />
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

ErrorCard.propTypes = {};

export default memo(ErrorCard);
