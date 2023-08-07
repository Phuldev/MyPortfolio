import React from "react";
import { Link } from "react-router-dom";
import jsonData from "../data/Menu.json";

const Nav = () => {
  const items = jsonData["items"];
  return (
    <nav className="bg-zinc-800  text-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex text-2xl items-center">
          Phuldev Mandal
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {items.map((item) => (
              <li key={item["id"]} className="text-xl">
                <Link to={item.link}>{item["name"]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
