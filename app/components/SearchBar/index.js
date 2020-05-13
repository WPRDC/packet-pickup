/**
 *
 * SearchBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
// import messages from './messages';

function SearchBar({ value, onChange, onClick }) {
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      onClick();
    }
  }

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Enter your address"
        size="lg"
        aria-label="enter your address to search"
        value={value}
        onChange={onChange}
        name="address"
        onKeyPress={handleKeyPress}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={onClick}>
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
