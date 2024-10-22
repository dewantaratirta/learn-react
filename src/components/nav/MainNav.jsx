import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <>
      <Link className="mr-4 flex items-center space-x-2 lg:mr-6" to="/">
        <img src="/assets/vite.svg" alt="Vite" className="w-8 h-8" />
        <span className="hidden font-bold lg:inline-block">shadcn/ui</span>
      </Link>

      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/apps" className="">
          Apps
        </Link>
      </nav>
    </>
  );
}
