import { poppins, rubik } from "@/app/ui/fonts";
import Image from "next/image";

interface AuthLayout {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayout) {
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
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
