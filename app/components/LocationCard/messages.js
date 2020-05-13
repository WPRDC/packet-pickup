/*
 * LocationCard Messages
 *
 * This contains all the text for the LocationCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LocationCard';

export default defineMessages({
  primaryHeader: {
    id: `${scope}.primaryHeader`,
    defaultMessage: 'Your Packet Pickup Location',
  },
  secondaryHeader: {
    id: `${scope}.secondaryHeader`,
    defaultMessage: 'Backup Pickup Location',
  },
});
