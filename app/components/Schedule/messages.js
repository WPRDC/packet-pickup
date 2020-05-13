/*
 * Schedule Messages
 *
 * This contains all the text for the Schedule component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Schedule';

export default defineMessages({
  gradeLevel: {
    id: `${scope}.gradeLevel`,
    defaultMessage: 'Grade Level',
  },
  distDay: {
    id: `${scope}.distDay`,
    defaultMessage: 'Distribution Day',
  },
});
