"use client";

import useAxiosInt from "./useAxiosInt";
import { useDispatch } from "react-redux";
import { addUser, setUserLoading} from "@/redux/features/userSlice";

export default function useGetUser() {
  const { axiosInstance } = useAxiosInt();
  const dispatch = useDispatch();
  async function getUser() {
    dispatch(setUserLoading(true))
    try {
      const { data } = await axiosInstance.get("/users");
      const { user } = data;
      dispatch(addUser(user));
      dispatch(setUserLoading(false))
      return user;
    } catch (error) {
      console.log(error.message)
      dispatch(setUserLoading(false));
    } 
  }
  return getUser;
}
