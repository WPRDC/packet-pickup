/*
 * Section Messages
 *
 * This contains all the text for the Section component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Section';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Section component!',
  },
});
