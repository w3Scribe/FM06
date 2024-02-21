import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <section className=" h-svh sm:h-screen bg-cream-500 grid place-items-center">
      <main className=" w-10/12  sm:p-0 sm:w-[600px] bg-white rounded-lg  shadow-lg shadow-cream-400 overflow-hidden sm:flex font-montserrat">
        {/*desk view : Image */}
        <div className="relative sm:w-1/2 min-h-60 w-full sm:min-h-96">
          <Image src={"/desk.jpg"} fill alt="" className="hidden sm:block" />
          <Image src={"/mob.jpg"} fill alt="" className="block sm:hidden" />
        </div>
        <div className="sm:p-8 sm:w-1/2 my-2 p-5">
          <h3 className="tracking-widest text-darkCyan-600 uppercase">
            Ferfume
          </h3>
          <h1 className=" text-darkBlue-500 text-2xl font-bold my-3 font-fraunces">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-grayishBlue-500 font-montserrat">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          {/* price */}
          <div className="my-3 flex justify-start items-center gap-3 font-fraunces">
            <h4 className=" text-darkCyan-500 text-3xl sm:text-2xl font-semibold">
              $149.99
            </h4>
            <h5 className=" text-grayishBlue-500 line-through text-sm">
              $169.99
            </h5>
          </div>
          {/* button */}
          <button className=" py-2.5 sm:py-1.5 px-4 bg-darkCyan-500 mt-4  text-white font-bold rounded-md active:opacity-80 w-full flex justify-center items-center gap-2">
            <Image src={"/icon-cart.svg"} alt="" width={15} height={15} />
            Add to Cart
          </button>
        </div>
      </main>
      <div
        className=" absolute bottom-0 left-0 w-full text-center text-sm text-cream-900 py-8 sm:py-5
       [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-cream-700 px-10 text-pretty"
      >
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link href="https://www.frontendmentor.io/profile/w3Scribe">
          Sudhir Gadpayle
        </Link>
        .
      </div>
    </section>
  );
};

export default Page;
