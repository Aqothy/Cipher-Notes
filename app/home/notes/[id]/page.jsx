import EditNote from "@/components/EditNote";
import Back from "@/components/Back";

export default function Note({ params }) {
  return (
    <main className="min-h-screen w-screen flex justify-center items-center bg-[#F5F4F1]">
      <Back to={"/home"} />
      <EditNote id={params.id} />
    </main>
  );
}
