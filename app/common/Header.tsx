import { Link } from "@remix-run/react";
import type { FC } from "react";
// import { ConnectWallet } from "./ConnectWallet";
// import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  return (
    <>
      <div className="navbar bg-base-300 mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Ranking
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-200">
                  <li>
                    <a>dApp</a>
                  </li>
                  <li>
                    <a>Address</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex-1">
              <button className="btn btn-square btn-ghost">
                <span className="text-2xl">🔥</span>
              </button>
              <span className="text-lg font-bold mt-3">Astar Rewards</span>
            </div>
          </Link>
        </div>

        <div className="navbar-end form-control">
          <div className="form-control w-full">
            <div className="input-group full input-group-sm">
              <input
                type="text"
                placeholder="Search Addrerss…"
                className="input input-bordered full w-full input-sm"
              />
              <button className="btn btn-square btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
