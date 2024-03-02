import axios from "@/utils/axios";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/features/tokenSlice";
import { setTokenLoading } from "@/redux/features/tokenSlice";
import { addUser, setUserLoading} from "@/redux/features/userSlice";

export default function useRefresh() {
  const dispatch = useDispatch();
  async function refresh() {
    try {
      const { data } = await axios.get("/refresh");
      const { accessToken, user } = data;
      dispatch(setToken(accessToken));
      dispatch(setTokenLoading(false));
      dispatch(setUserLoading(false));
      dispatch(addUser(user));
      return accessToken;
    } catch (error) {
      dispatch(setTokenLoading(false));
      dispatch(setUserLoading(false));
    }
  }
  return refresh;
}
