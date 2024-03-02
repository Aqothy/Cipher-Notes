import EditNote from "@/components/notes/EditNote";
import Back from "@/components/Buttons/Back";

export default function Note({ params }) {
  return (
    <main className="min-h-screen w-screen flex justify-center items-center bg-[#F5F4F1]">
      <Back to={"/home"} />
      <EditNote id={params.id} />
    </main>
  );
}
