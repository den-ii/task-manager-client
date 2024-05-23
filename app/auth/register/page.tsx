import { poppins, rubik } from "@/app/ui/fonts";
import Link from "next/link";

function Register() {
  return (
    <>
      <Link href="/auth/login" className="mt-14 cursor-pointer text-[#8338ec] ">
        Login
      </Link>
      <p className={`${rubik.className}  antialiased text-3xl font-bold `}>
        Welcome, Do You Want To Create An Account?
      </p>
      <form className={`${rubik.className} mt-5`}>
        <div className="flex gap-3 w-full">
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              First Name:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="text"
              placeholder="Oliver"
            />
          </div>
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Last Name:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="text"
              placeholder="Queen"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full mt-3">
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Email:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="text"
              placeholder="oliverqueen@manager.com"
            />
          </div>
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Organization:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="text"
              placeholder="Manager Inc"
            />
          </div>
        </div>
        <div className="flex gap-3 w-full mt-3">
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Password:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="password"
              placeholder="***********"
            />
          </div>
          <div className="flex-1">
            <label className={`${poppins.className} font-semibold text-lg`}>
              Confirm Password:
            </label>
            <input
              className="block w-full p-2 rounded-lg border focus:outline-none border-[#575a4b] mt-2"
              type="password"
              placeholder="***********"
            />
          </div>
        </div>
        <div className="flex-1 justify-center mt-5 text-center">
          <button
            type="submit"
            className={`bg-[#8338ec] ${poppins.className} py-4 px-6 rounded-xl min-w-[340px] text-white font-bold focus:outline-none hover:bg-[#722fd1] transition duration-300 ease-in-out`}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
