import { TbNotesOff } from "react-icons/tb";
import Link from "next/link";

export default function Welcome() {
  return (
    <main className="flex h-[100vh] max-sm:flex-col">
      <section
        className="sm:w-[65vw] flex justify-center items-center bg-[#F5F4F1] max-sm:h-full"
        style={{
          backgroundImage: "linear-gradient(#ccc 1px, transparent 1px)",
          backgroundSize: "20px 120px",
        }}
      >
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className="text-5xl sm:text-6xl font-semibold">Cipher Notes</h1>
          <h3 className="text-base sm:text-2xl text-gray-600">Take your notes in privacy</h3>
          <Link
            href="/sign-up"
            className="border w-fit px-[1rem] py-[0.5rem] rounded-md"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,207,0,1) 0%, rgba(252,169,3,1) 100%)",
            }}
          >
            Get started
          </Link>
        </div>
      </section>
      <section
        className="w-[35vw] flex justify-center items-center bg-[#FCCB2A] relative max-sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,207,0,1) 0%, rgba(252,169,3,1) 100%)",
        }}
      >
        <Link
          href="/login"
          className="absolute right-[5%] top-[5%] font-bold text-2xl"
        >
          Login
        </Link>
        <TbNotesOff className="w-[50%] h-auto text-white" />
      </section>
    </main>
  );
}
