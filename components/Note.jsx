import Link from "next/link";
import DeleteNote from "./DeleteNote";
import { FaRegEdit } from "react-icons/fa";
import { format } from "date-fns";

export default function Note({ note, setModal, setModalData }) {
  if (!note) return <div>no notes at the moment</div>;
  return (
    <div
      className="rounded-t-3xl rounded-b-3xl h-[270px] w-[17rem] overflow-hidden bg-white cursor-pointer"
      onClick={() => {
        setModalData(note);
        setModal(true);
      }}
    >
      <div className="flex items-center justify-between bg-[#FCCB2A] p-[1rem]">
        <p className="truncate">{note.title}</p>
        <div
          className="flex justify-center items-center gap-[0.5rem] text-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href={`/home/notes/${note._id}`}>
            <FaRegEdit />
          </Link>
          <DeleteNote id={note._id} />
        </div>
      </div>
      <div className="px-[1rem] pt-[0.5rem] text-right">
        {format(note.createdAt, "MM dd yyyy")}
      </div>
      <div className="px-[1rem] pb-[1rem]">
        <p style={{ wordWrap: "break-word" }} className="line-clamp-[7]">
          {note.text}
        </p>
      </div>
    </div>
  );
}
