import {
  CARTO_ACCOUNT,
  CARTO_SQL_KEY,
  CARTO_TABLE,
  GOOGLE_KEY,
} from '../../settings';

const cartoSQLEndpointBase = `https://${CARTO_ACCOUNT}.carto.com/api/v2/sql`;
const defaultCenter = { lat: 40.440624, lng: -79.995888 };

const geocoderEndpointBase =
  'https://maps.googleapis.com/maps/api/geocode/json';

function getIntersectUrl(point) {
  const ptGeom = `ST_SetSRID(ST_MakePoint(${point.lng}, ${point.lat}), 4326)`;

  const sql = `SELECT name, address, latitude, longitude
                FROM ${CARTO_TABLE}
                WHERE ST_Intersects(the_geom, ${ptGeom})`;

  return `${cartoSQLEndpointBase}?q=${sql}&api_key=${CARTO_SQL_KEY}`;
}

export function geocodeAddress(address) {
  return fetch(`${geocoderEndpointBase}?address=${address}&key=${GOOGLE_KEY}`);
}

export function fetchZoneForPoint(point) {
  const url = getIntersectUrl(point);
  return fetch(url);
}

export function askForDirections(origin, destination, cb) {
  /* eslint-disable no-undef */
  const ds = new google.maps.DirectionsService();
  return ds.route(
    { origin, destination, travelMode: google.maps.TravelMode.BICYCLING },
    cb,
  );
  /* eslint-enable no-undef */
}
