import axios from "axios";

export const getReviewsByPostalPlace = async (postalPlace, callback) => {
  axios
    .get(`/api/mattilsyn?poststed=${postalPlace}`)
    .then(res => {
      callback(res.data);
    })
    .catch(error => {
      console.error(error);
    });
};
