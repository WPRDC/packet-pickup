/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import messages from './messages';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';
import LocationCard from '../../components/LocationCard';
import {
  askForDirections,
  fetchZoneForPoint,
  geocodeAddress,
} from '../../components/Map/utils';
import Section from '../../components/Section';
import ErrorCard from '../../components/ErrorCard';
import { LINKS, MULTI_LOCATIONS } from '../../settings';
import PPSLogo from '../../images/pittsburgh-public-schools-logo.png';
import Footer from '../../components/Footer';

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.p`
  text-align: justify;
`;

const Note = styled.p`
  text-align: justify;
  font-style: italic;
`;

const Warning = styled.p`
  font-weight: 800;
`;

const Logo = styled.img`
  display: block !important;
  margin: 0 auto;
`;

const apiKey = 'AIzaSyAs6ZLo_RaMA1nRQYiYyDDFUvJx2qoAkkA';

const mapsUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

export default function HomePage() {
  const [myLocation, setMyLocation] = React.useState(undefined);
  const [primaryLocation, setPrimaryLocation] = React.useState(undefined);
  const [secondaryLocations, setSecondaryLocation] = React.useState(undefined);
  const [directions, setDirections] = React.useState(undefined);
  const [geolocated, setGeolocated] = React.useState(false);
  const [error, setError] = React.useState(undefined);

  const [address, setAddress] = React.useState(undefined);

  function handleError(err) {
    setMyLocation(undefined);
    setPrimaryLocation(undefined);
    setError(err);
  }

  const extractLatLng = setter => ({ coords }) => {
    setter({ lat: coords.latitude, lng: coords.longitude });
    setGeolocated(true);
  };

  const extractPickupLocation = data => {
    if (data.rows && data.rows.length) setPrimaryLocation(data.rows[0]);
    else setError('location not found');
  };

  const extractGeocodedLocation = data => {
    if (data.results && data.results.length)
      setMyLocation(data.results[0].geometry.location);
    else {
      setError('geocode failed');
      setMyLocation(undefined);
    }
  };

  const handleDirectionsResponse = (newDirections, status) => {
    if (status === 'OK') {
      setDirections(newDirections);
    } else {
      fetchZoneForPoint(myLocation).then(
        r => r.json().then(extractPickupLocation, handleError),
        handleError,
      );
    }
  };

  // On mount, check tey to get location automatically
  React.useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation not working.');
    } else {
      navigator.geolocation.getCurrentPosition(
        extractLatLng(setMyLocation),
        console.error,
      );
    }
  }, []);

  // once the user's location is known or changes,
  // find their nearest pickup location
  React.useEffect(() => {
    setPrimaryLocation(undefined);
    if (myLocation) {
      fetchZoneForPoint(myLocation).then(
        r => r.json().then(extractPickupLocation, handleError),
        handleError,
      );
    }
  }, [myLocation]);

  React.useEffect(() => {
    if (myLocation && primaryLocation) {
      setError(undefined);
      askForDirections(
        myLocation,
        primaryLocation.address,
        handleDirectionsResponse,
      );
    }
  }, [myLocation, primaryLocation]);

  React.useEffect(() => {
    if (primaryLocation) {
      setSecondaryLocation(MULTI_LOCATIONS[primaryLocation.name]);
    }
  }, [primaryLocation]);

  function handleSearchChange(event) {
    setAddress(event.target.value);
  }

  function handleSearch() {
    setGeolocated(false);
    geocodeAddress(address).then(
      r => r.json().then(extractGeocodedLocation, handleError),
      handleError,
    );
  }

  return (
    <Container fluid="md">
      <a href={LINKS.PPS_HOME}>
        <Logo
          alt="Pittsburgh Public Schools"
          src={PPSLogo}
          className="d-inline-block align-middle"
        />
      </a>
      <Section colProps={{ lg: 10 }}>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Section>
      {/* Main Text Content */}
      <Section>
        <Content>
          <FormattedMessage {...messages.description} />
        </Content>
        <Alert variant="primary">
          <Alert.Heading style={{ textAlign: 'center', fontWeight: 'bolder' }}>
            <FormattedMessage {...messages.timingNote} />
          </Alert.Heading>
        </Alert>
        <p>
          <FormattedMessage {...messages.safetyNote} />
        </p>
        <p>
          <FormattedMessage {...messages.moreInfo} />
        </p>
      </Section>

      {/* Search Section */}
      <Section bordered>
        <h2>Search for Your Pickup Location</h2>
        <Note>
          <FormattedMessage {...messages.searchNote} />
        </Note>
        <SearchBar
          value={address}
          onChange={handleSearchChange}
          onClick={handleSearch}
        />

        {/* Results Section */}
        {!!primaryLocation && (
          <React.Fragment>
            <Warning>
              <FormattedMessage {...messages.mainWarning} />
            </Warning>
            {!!secondaryLocations && (
              <Warning>
                <FormattedMessage {...messages.secondaryWarning} />
              </Warning>
            )}
            <LocationCard
              primary
              name={primaryLocation.name}
              address={primaryLocation.address}
            />
            {!!secondaryLocations && (
              <React.Fragment>
                {secondaryLocations.map(sl => (
                  <LocationCard
                    primary
                    title="Additional Pickup Location"
                    name={sl.name}
                    address={sl.addr}
                  />
                ))}
              </React.Fragment>
            )}

            {geolocated && (
              <div>
                <Warning>
                  <FormattedMessage {...messages.geolocationWarning} />
                </Warning>
                <Note>
                  <FormattedMessage {...messages.geolocationWarningNote} />
                </Note>
              </div>
            )}
          </React.Fragment>
        )}
      </Section>

      {!!error && (
        <Section>
          <ErrorCard />
        </Section>
      )}
      <Section hidden={!primaryLocation}>
        <Map
          myLocation={myLocation}
          primaryLocation={primaryLocation}
          googleMapURL={mapsUrl}
          directions={directions}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Section>
      <Footer />
    </Container>
  );
}
