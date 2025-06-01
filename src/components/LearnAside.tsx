import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <aside className="mx-3 ">
      <nav className="my-7">
        <ul className="flex flex-col ">
          <li className="w-40 border-b border-black my-1 p-1 hover:text-[#149eca] duration-200 ">
            <NavLink to="/learn" end>Quick Start</NavLink>
          </li>
          <li className="w-40 border-b border-black my-1 p-1 hover:text-[#149eca] duration-200">
            <NavLink to="/learn/thinking-in-react">Thinking in React</NavLink>
          </li>
          <li className="w-40 border-b border-black my-1 p-1 hover:text-[#149eca] duration-200">
            <NavLink to="/learn/installation">installation</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LearnAside;
