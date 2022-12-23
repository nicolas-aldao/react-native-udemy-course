import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer KO2V5Ssfcxf07cy6Un7SUUPgxl4gzC1tPG64W5dAxXq9xTdjBtD908ICBlJntJO1gdEqBvH2_zmmOML6IrsYZ--Xpr_9ZUh5AF8y_DEji0PU5DZESKKUmb5-DXujY3Yx',
  },
});
