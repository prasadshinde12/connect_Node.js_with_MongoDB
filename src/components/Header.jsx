import { Link } from "react-router";

export default function Header() {
  return (
    <header className="w-sm lg:w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">
      <figure className="logo w-full lg:w-1/6">
        <img
          className="animate__animated animate__bounce"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxwUGMThSMYygZoRtiJEmrL-06o0HboKs5IdnHgn73Sg&s=10"
          alt="Shopping Website Logo"
        />
      </figure>

      <nav className="w-full lg:w-5/6">
        <ul className="flex flex-wrap justify-center lg:justify-end pt-2">
          <li className="pl-2 pr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-2 pr-2">
            <Link to="/comp1">Comp1</Link>
          </li>
          <li className="pl-2 pr-2">
            <Link to="/comp2">Comp2</Link>
          </li>
          <li className="pl-2 pr-2">
            <Link to="/comp3">Comp3</Link>
          </li>
          <li className="pl-2 pr-2">
            <Link to="/comp4" className="font-semibold text-blue-600">Comp4 (View Users)</Link>
          </li>
          <li className="pl-2 pr-2">
            <Link to="/comp5" className="font-semibold text-emerald-600">Comp5 (Insert User)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
