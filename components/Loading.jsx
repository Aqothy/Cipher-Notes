import { TbNotesOff } from "react-icons/tb";

export default function Loading() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <TbNotesOff className="w-[10%] h-auto text-black loading" />
    </main>
  );
}
