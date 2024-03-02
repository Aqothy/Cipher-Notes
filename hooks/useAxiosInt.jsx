import axios from "axios";
import { useEffect } from "react";
import useRefresh from "./useRefresh";
import { useSelector } from "react-redux";

export default function useAxiosInt() {
  const refresh = useRefresh();
  const { token } = useSelector((state) => state.token);

  // Create a new Axios instance
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
  });
  let reqInt, resInt;

  useEffect(() => {
    reqInt = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => {
        throw new Error(err.response.data.msg);
      }
    );

    resInt = axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const prevReq = err.config;
        if (err?.response?.status === 403 && !prevReq.sent) {
          prevReq.sent = true;
          const newAccessToken = await refresh();
          prevReq.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(prevReq);
        }
        throw new Error(err.response.data.msg);
      }
    );
  }, [token, refresh]);

  function eject() {
    axiosInstance.interceptors.response.eject(resInt);
    axiosInstance.interceptors.request.eject(reqInt);
  }

  return { axiosInstance, eject };
}
