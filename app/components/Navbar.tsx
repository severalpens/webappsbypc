import Link from "next/link";


function Navbar() {


  return (
    <>
      <div className="container flex justify-between mx-auto  border m-4 border-black px-4 rounded-3xl">
        <div className="p-6 columns-2  flex ">
          <div className="p-6 ">
            <Link className="font-bold" href="/">
              Home
            </Link>
          </div>
          <div className="p-6">
            <Link className="" href="/racetimes">
              Race Times
            </Link>
          </div>
          <div className="p-6">
            <Link className="" href="/tttasks">
              Task Timer
            </Link>
          </div>
        </div>
      </div>
    </>
       );
}

export default Navbar;