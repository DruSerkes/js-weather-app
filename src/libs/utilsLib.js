/**
 *
 * @param {GeolocationPositionError} error
 * @returns {string}
 */
export function createGeolocationError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "User denied the request for Geolocation."
    case error.POSITION_UNAVAILABLE:
      return "Location information is unavailable."
    case error.TIMEOUT:
      return "The request to get user location timed out."
    case error.UNKNOWN_ERROR:
      return "An unknown error occurred."
    default:
      return "An unknown error occurred."
  }
}

export const getUserTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;