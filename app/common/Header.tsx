import { Link } from "@remix-run/react";
import type { FC } from "react";
import { useState } from "react";
// import { ConnectWallet } from "./ConnectWallet";
// import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  const [inputAddressValue, setInputAddressValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddressValue(e.target.value);
  };
  const searchHandler = () => {
    window.location.href = "/address/" + inputAddressValue;
  };
  return (
    <>
      <div className="navbar bg-base-300 shadow-lg bg-neutral text-neutral-content">
        <div className="navbar-start">
          <Link to="/">
            <div className="flex-1">
              <button className="btn btn-square btn-ghost">
                <span className="text-xl">🔥</span>
              </button>
            </div>
          </Link>
        </div>
        {/* <div className="navbar-center">
          <button className="btn btn-sm btn-secondary">👛 Connect</button>
        </div> */}

        <div className="navbar-end form-control">
          <div className="form-control">
            <div className="input-group input-group-sm">
              {!inputAddressValue.length ? (
                <>
                  <button className="btn btn-square btn-sm btn-disabled">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Address…"
                    className="input input-bordered input-sm w-full max-w-xs"
                    value={inputAddressValue}
                    onChange={(event) => handleChange(event)}
                  />
                </>
              ) : (
                <>
                  <label className="input-group input-group-sm">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={searchHandler}
                    >
                      Search
                    </button>
                    <input
                      type="text"
                      placeholder="Address…"
                      className="input input-bordered input-sm w-full max-w-xs"
                      value={inputAddressValue}
                      onChange={(event) => handleChange(event)}
                    />
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
