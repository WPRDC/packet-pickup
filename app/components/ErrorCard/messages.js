/*
 * ErrorCard Messages
 *
 * This contains all the text for the ErrorCard component.
 */
import React from 'react';

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ErrorCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "We Couldn't Find Your Pickup Location",
  },
  text: {
    id: `${scope}.text`,
    defaultMessage:
      'We had a issue finding your pickup location. ' +
      'Please double check that you entered the correct address into the search bar. ' +
      'If you still cannot find your location, please call {number}.',
    values: {
      number: <a href="tel:412-529-4357">412-529-4357</a>,
    },
  },
});
