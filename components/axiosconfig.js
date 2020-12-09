import axios from "axios";

const instacnce = axios.create({
  baseURL: "https://foodieanalyticsbeta.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instacnce;
