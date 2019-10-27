import { postCountries } from "../actions/countryActions";

export const getCountries = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/countries", {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => dispatch(postCountries(data)));
};
