import { Link } from "@remix-run/react";
import type { FC } from "react";
// import { ConnectWallet } from "./ConnectWallet";
// import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  return (
    <>
      <div className="navbar bg-base-300 mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <Link to="/">
            <div className="flex-1">
              <button className="btn btn-square btn-ghost">
                <span className="text-xl">🔥</span>
              </button>
              <span className="text-lg font-bold mt-3">OnFire dAppStaking</span>
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
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
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
