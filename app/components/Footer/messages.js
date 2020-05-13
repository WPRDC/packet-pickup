/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';
import React from 'react'
export const scope = 'app.components.Footer';

export default defineMessages({
  copyright: {
    id: `${scope}.copyright`,
    defaultMessage:
      '{symbol} {year} Western PA Regional Data Center in conjunction with Pittsburgh Public Schools.',
    values: { symbol: <span>&#169;</span>, year: new Date().getFullYear() },
  },
  privacyBrief: {
    id: `${scope}.privacyBrief`,
    defaultMessage:
      'The WPRDC will not store or collect any information entered on this site.',
  },
});
