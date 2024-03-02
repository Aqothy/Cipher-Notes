import CreateNote from "@/components/notes/CreateNote";
import Welcome from "@/components/Welcome";
import NotesList from "@/components/notes/NotesList";
import Search from "@/components/Forms/Search";

export default async function page() {
  return (
    <main className="min-h-screen bg-[#F5F4F1] p-[1.5rem] flex flex-col gap-[1rem] relative">
      <Welcome />
      <div className="flex gap-[1rem]">
        <Search />
        <CreateNote />
      </div>
      <NotesList />
    </main>
  );
}
