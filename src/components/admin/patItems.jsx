import Axios from "axios";

let data = []

Axios.get("http://localhost:3005/getPatData").then(response => {

data = (response.data);
});


export const patItems = data;