import { poppins, rubik } from "@/app/ui/fonts";
import Link from "next/link";

function Login() {
  return (
    <>
      <Link
        href="/auth/register"
        className="mt-14 cursor-pointer text-[#8338ec]"
      >
        Register
      </Link>
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
    </>
  );
}

export default Login;
