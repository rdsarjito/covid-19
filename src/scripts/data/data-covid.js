import END_POINT from '../config/';

class CovidData {
  // get summary by covid endpoint
  static getSummary() {
    return fetch(END_POINT.ENDPOINT_SUMMARY)
      .then(r => r.json())
      .then(json => {
        return Promise.resolve(json);
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }
  // get all countries by covid endpoint
  static getAllCountries() {
    return fetch(END_POINT.ENDPOINT_COUNTRIES)
      .then(r => r.json())
      .then(json => {
        return Promise.resolve(json);
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }

  // get all confirmed cases by covid endpoint
  static getSingleCountry(countryIso3) {
    return fetch(`${END_POINT.ENDPOINT_COUNTRIES}/${countryIso3}`)
      .then(r => r.json())
      .then(json => {
        return Promise.resolve(json);
      })
      .catch(e => {
        return Promise.reject(e);
      });
  }
}

export default CovidData;