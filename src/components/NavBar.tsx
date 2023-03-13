import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-white/10 fixed py-4 w-full">
      <div className="container mx-auto px-3 flex items-center justify-between">
        <h1 className="uppercase text-2xl text-white font-bold tracking-widest">
          SolClan
        </h1>
        <nav>
          <ul className="flex justify-center space-x-10">
            <Link href="/">
              <li className="text-white font-bold tracking-widest text-md">
                About us
              </li>
            </Link>
            <Link href="/">
              <li className="text-white font-bold tracking-widest text-md">
                USP
              </li>
            </Link>
            <Link href="/">
              <li className="text-white font-bold tracking-widest text-md">
                Onboarding
              </li>
            </Link>
          </ul>
        </nav>
        <div>
          <button className="border-2 border-white text-white tracking-widest text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors duration-300">
            Download app
          </button>
        </div>
      </div>
    </div>
  );
}
