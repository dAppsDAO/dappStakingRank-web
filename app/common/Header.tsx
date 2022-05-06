import { Link } from "@remix-run/react";
import { FC, useState } from "react";
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
        {/* <div className="navbar-center">
          <button className="btn btn-sm btn-secondary">👛 Connect</button>
        </div> */}

        <div className="navbar-end form-control">
          <div className="form-control">
            <div className="input-group input-group-sm">
              <input
                type="text"
                placeholder="Address…"
                className="input input-bordered input-sm"
                value={inputAddressValue}
                onChange={(event) => handleChange(event)}
              />
              <button className="btn btn-square btn-sm" onClick={searchHandler}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
