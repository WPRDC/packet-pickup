/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage:
      'Find Your Closest Instructional Packet Pickup Location or School',
  },
  searchNote: {
    id: `${scope}.searchNote`,
    defaultMessage:
      "If the website didn't automatically find your pickup location, or if you are " +
      "currently not at home, or searching on someone else's behalf, you can use " +
      'this search.',
  },
  timingNote: {
    id: `${scope}.timingNote`,
    defaultMessage:
      'Packet distribution will take place from 10:00 AM - 2:00 PM on Monday, May 4th and Tuesday, May 5th.',
  },
  safetyNote: {
    id: `${scope}.safetyNote`,
    defaultMessage:
      'Clear signage promoting social distancing will be posted at each location and all volunteers will be wearing masks and gloves to help slow the spread of COVID-19. Families and students picking up packets are strongly encouraged to wear face coverings such as a mask, bandana, or scarf.',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'Instructional packets will be distributed ' +
      'to PreK-8 students over a 2-day period on Monday, May 4th and Tuesday, May 5th.{br}' +
      'All instructional packets for grades PreK-8 will be available on both days.{br}' +
      'High school students will receive instructional materials online through Microsoft Teams. Printed materials will not be available for high school students.',
    values: {
      br: (
        <React.Fragment>
          <br />
          <br />
        </React.Fragment>
      ),
    },
  },
  mainWarning: {
    id: `${scope}.mainWarning`,
    defaultMessage:
      'This pick up location is only for school work packets and is not related to technology needs or {link}.',
    values: {
      link: (
        <a href="https://www.pghschools.org/Page/5356">
          grab and go meal sites
        </a>
      ),
    },
  },
  moreInfo: {
    id: `${scope}.moreInfo`,
    defaultMessage:
      'If you have any questions, please call {phone} or contact us {talkLink}.{br}{br}' +
      'Visit {link} for the latest updates and information.',
    values: {
      phone: <a href="tel:412-529-4357">412-529-HELP (4357)</a>,
      link: (
        <a href="https://www.pghschools.org/coronavirus">
          our COVID-19 Updates page
        </a>
      ),
      talkLink: <a href="https://www.pghschools.org/Letstalk">online</a>,
      br: <br />,
    },
  },
  geolocationWarning: {
    id: `${scope}.geolocationWarning`,
    defaultMessage: '⚠️ Double Check the Map ⚠️',
  },
  geolocationWarningNote: {
    id: `${scope}.geolocationWarningNote`,
    defaultMessage:
      'We used the location provided from you web browser.  This may not be accurate, or you might not be ' +
      'at home.  Please make sure that point "A" on the map is at, or very close to, your home. ' +
      'If it is not accurate, please search using the searchbox above',
  },
  secondaryWarning: {
    id: `${scope}.secondaryWarning`,
    defaultMessage:
      'Your neighborhood has more than one available pickup location. ' +
      'You can go to whichever site is most convenient for you.',
  },
  beechviewNote: {
    id: `${scope}.backupNote`,
    defaultMessage:
      'Families with children in PreK to 5th grade should go to Beechwood-PreK, ' +
      'families with children in grades 6-12 should go to Brashear',
  },
});
