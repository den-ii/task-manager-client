import { poppins, rubik } from "@/app/ui/fonts";
import Image from "next/image";

function LoginPage() {
  return (
    <main className="md:flex h-screen">
      <div className="bg-[#8338ec] md:w-[40%] flex flex-col  items-center p-5">
        <div>
          <Image src="/pin.svg" width={45} height={45} alt="logo" />
        </div>
        <p
          className={`${rubik.className}  mt-14 antialiased text-3xl font-bold text-center`}
        >
          Are You Here To Complete Tasks With No Hassle?
        </p>
        <p className={`${poppins.className} mt-16 text-center italic text-lg`}>
          It’s more than just a to-do list; it’s your personal productivity
          companion.
        </p>
        <div className="mt-5">
          <Image src="/login.svg" width={300} height={300} alt="task" />
        </div>
      </div>
      <div className="bg-white md:w-[60%] text-[#2a2c24] flex flex-col justify-center p-5">
        <p className="mt-14 cursor-pointer text-[#8338ec]  ">Register</p>
        <p className={`${rubik.className}  antialiased text-3xl font-bold `}>
          Welcome, Do You Want To Signin?
        </p>
        <form className={`${rubik.className} mt-5`}>
          <div>
            <label className={`${poppins.className} font-semibold text-lg`}>
              Email:
            </label>
            <input
              className="block w-full max-w-[600px] p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="text"
              placeholder="Cradle@task.com"
            />
          </div>
          <div className="mt-4">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Password:
            </label>
            <input
              className="block w-full p-2 max-w-[600px] rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="password"
              placeholder="***********"
            />
          </div>
          <div className="flex justify-center mt-5 max-w-[600px]">
            <button
              type="submit"
              className={`bg-[#8338ec] ${poppins.className} py-4 px-6 rounded-xl min-w-[340px] text-white font-bold focus:outline-none hover:bg-[#722fd1] transition duration-300 ease-in-out`}
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
