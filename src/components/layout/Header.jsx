import Link from "next/link";

const Header = () => {

    const nav = [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Menu",
          path: "/menu"
        },
        {
          title: "About",
          path: "/about"
        },
        {
          title: "Contatc",
          path: "/contact"
        },
        {
          title: "Login",
          path: "/login"
        }
      ]

    return (
        <header className="flex justify-between">

        {/* <nav className="flex gap-4 text-gray-500 font-semibold">
          {
            nav.map((item)=>(
              <Link href={item.path} key={item.title}>{item.title}</Link>
            ))
          }
        </nav> */}

        <nav className="flex items-center gap-10 font-semibold text-gray-500">
          <Link href={"/"} className="font-semibold text-primary text-2xl">
            Mat&apos;s Pizza
          </Link>

          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"contact"}>Contact</Link>
        </nav>

        <nav className="flex items-center gap-8">
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"} className="bg-primary text-white px-6 py-1 rounded-full">Register</Link>
        </nav>
      </header>
    )
}

export default Header;