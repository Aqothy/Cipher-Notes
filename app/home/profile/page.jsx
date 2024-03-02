import UpdateForm from "@/components/UpdateForm";
import Back from "@/components/Back";
import LogoutButton from "@/components/LogoutButton";
import DeleteUser from "@/components/DeleteUser";

export default function Profile() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Back to={"/home"} />
      <section className="flex flex-col w-full items-center justify-center">
        <UpdateForm />
        <div className="flex justify-between w-[30%] gap-[1rem]">
          <LogoutButton />
          <DeleteUser />
        </div>
      </section>
    </main>
  );
}
