import http from "./httpService";

export const getOtp = (phoneNumber) => {
  return http.post("/user/get-otp", phoneNumber).then(({ data }) => data.data);
};

export const checkOtp = (phoneNumber) => {
  return http.post("/user/check-otp", phoneNumber).then(({ data }) => data.data);
};
