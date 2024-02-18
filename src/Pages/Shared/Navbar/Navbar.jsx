import { useEffect } from "react";
import { useState } from "react";
// import { postCategories } from "../../../APIRequest/APIRequest";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const loadData = async () => {
  //     const res = await postCategories();
  //     setCategories(res);
  //   };
  //   loadData();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     let res = await postCategories();
  //     setCategories(res);
  //   })();
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        "https://basic-blog.teamrabbil.com/api/post-categories"
      );
      setCategories(response.data);
    };

    loadData();
  }, []);

  return (
    <div className="navbar bg-base-100 shadow fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">হোম</NavLink>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/bycategory/${item.id}`}>{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">হোম</NavLink>
          </li>
          {categories.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/bycategory/${item.id}`}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
