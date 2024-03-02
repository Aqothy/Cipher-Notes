"use client";

import useAxiosInt from "@/hooks/useAxiosInt";
import { toast } from "react-toastify";
import useGetUser from "@/hooks/useGetUser"
import { MdDelete } from "react-icons/md";

export default function DeleteNote({ id }) {
  const { axiosInstance, eject } = useAxiosInt();
  const getUser = useGetUser();
  async function deleteNote() {
    try {
      const { data } = await axiosInstance.delete("/notes", { data: { id } });
      await getUser();
      eject();
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <button onClick={deleteNote}>
      <MdDelete />
    </button>
  );
}
