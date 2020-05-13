/**
 *
 * Map
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  DirectionsRenderer,
  Circle,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import styled from 'styled-components';

import { locationPropType } from '../../utils';

const Wrapper = styled.div`
  width: 100%;
  height: 24rem;
  border: 2px solid black;
`;

const defaultCenter = { lat: 40.440624, lng: -79.995888 };

function Map({ myLocation, primaryLocation, directions }) {
  return (
    <GoogleMap defaultZoom={12} defaultCenter={defaultCenter}>
      {!directions && !!myLocation && (
        <Circle center={myLocation} radius={24} />
      )}
      {!directions && !!primaryLocation && (
        <Marker
          position={{
            lat: primaryLocation.latitude,
            lng: primaryLocation.longitude,
          }}
          label={primaryLocation.name}
        />
      )}
      {!!directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
}

Map.propTypes = {
  myLocation: locationPropType,
  primaryLocation: PropTypes.object,
};

export default withScriptjs(withGoogleMap(Map));
