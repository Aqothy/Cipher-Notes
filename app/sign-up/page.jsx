import SignupForm from '@/components/SignupForm'

export default function Signup() {
  return (
    <main
      className="flex justify-center items-center bg-[#F5F4F1] min-h-screen"
      style={{
        backgroundImage: "linear-gradient(#ccc 1px, transparent 1px)",
        backgroundSize: "20px 120px",
      }}
    >
      <section className="w-1/4 border-[#FED63C] border-2 p-[3rem] rounded-md h-auto">
        <h1 className="font-semibold text-4xl">Get Started!</h1>
        <h3 className="text-lg text-gray-500">Lets keep your notes private</h3>
        <SignupForm />
      </section>
    </main>
  );
}
