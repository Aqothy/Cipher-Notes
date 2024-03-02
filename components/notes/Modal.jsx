import { format } from "date-fns";

export default function Modal({ modalData, setModal }) {
  return (
    <main
      className="w-[100vw] h-[100vh] fixed bg-[#c8c8c8] inset-0 bg-opacity-80 flex items-center justify-center"
      onClick={() => setModal(false)}
    >
      <div
        className="w-2/5 bg-white min-h-[70%] rounded-t-3xl rounded-b-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <p
          className="p-[2rem] bg-[#FCCB2A] font-bold text-3xl"
          style={{ wordWrap: "break-word" }}
        >
          {modalData.title}
        </p>
        <p className="text-right px-[1rem] pt-[0.5rem]">{format(modalData.createdAt, "MM dd yyyy")}</p>
        <p className="px-[1rem]" style={{ wordWrap: "break-word" }}>
          {modalData.text}
        </p>
      </div>
    </main>
  );
}
