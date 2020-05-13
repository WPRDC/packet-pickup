/*
 * STUFF THAT CAN BE CHANGED
 */

import localSettings from './localSettings';

export const CARTO_ACCOUNT = 'wprdc';
export const CARTO_TABLE = 'pps_pickup_location_lookup';

export const { CARTO_SQL_KEY, GOOGLE_KEY } = localSettings;

export const LINKS = {
  PPS_HOME: 'https://www.pghschools.org/',
  WPRDC_HOME: 'https://www.wprdc.org/',
};

export const MULTI_LOCATIONS = {
  'Allderdice High School': [
    {
      name: 'Colfax K-8',
      addr: '2332 BEECHWOOD BLVD, PITTSBURGH PA 15217',
    },
  ],
  'Westinghouse Academy 6-12': [
    {
      name: 'Faison K-5',
      addr: '7430 TIOGA ST, PITTSBURGH PA 15208',
    },
  ],
  'Student Achievement Center': [
    {
      name: 'Faison K-5',
      addr: '7430 TIOGA ST, PITTSBURGH PA 15208',
    },
    {
      name: 'East Hills Community Center',
      addr: '2291 WILNER DR, PITTSBURGH PA 15221',
    },
  ],
  'East Hills Community Center': [
    {
      name: 'Student Achievement Center',
      addr: '925 BRUSHTON AVE, PITTSBURGH PA 15208',
    },
  ],
  'Clayton Academy': [
    {
      name: 'Pittsburgh Project',
      addr: '2801 N CHARLES ST, PITTSBURGH PA 15214',
    },
  ],
  'Grandview PreK-5': [
    {
      name: 'St. Paul AME',
      addr: '400 ORCHARD PLACE, PITTSBURGH PA 15210',
    },
  ],
};
