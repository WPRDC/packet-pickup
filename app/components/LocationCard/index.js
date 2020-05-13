/**
 *
 * LocationCard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const StyledCard = styled(Card)`
  margin: 0 0 1rem 0;
`;

function LocationCard({ name, address, primary, title }) {
  const defaultTitle = primary ? (
    <FormattedMessage {...messages.primaryHeader} />
  ) : (
    <FormattedMessage {...messages.secondaryHeader} />
  );

  return (
    <StyledCard
      border="info"
      bg={primary ? 'success' : 'secondary'}
      text="white"
    >
      <Card.Header as="h3">{title || defaultTitle}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{address}</Card.Subtitle>
        <Card.Text />
        <Button
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            address,
          )}`}
        >
          Get Directions
        </Button>
      </Card.Body>
    </StyledCard>
  );
}

LocationCard.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  primary: PropTypes.bool,
};

export default memo(LocationCard);
