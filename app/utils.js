import PropTypes from 'prop-types';

export const locationPropType = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
});
