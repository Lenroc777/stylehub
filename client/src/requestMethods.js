import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY0NGRlZDUzM2IwNGU4ZDcxZGVjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMzOTAwMSwiZXhwIjoxNjg0NTk4MjAxfQ.GTtgYOqWtIx3yFScSDRHGk3PVic1lBIvf_LB1k2lva4"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});