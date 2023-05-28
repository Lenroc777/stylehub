
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzMwZjhiOWY4ZTJlYjE0OWVmYTgyYyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODUyNzc5NDEsImV4cCI6MTY4NTUzNzE0MX0.6W-Yt2kpUrVmA7vy6Jkq_m9CxNh9CoL9d-CZtvMbnn4"
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});