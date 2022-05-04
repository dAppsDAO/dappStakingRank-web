import { Link } from "@remix-run/react";
import type { FC } from "react";
// import { ConnectWallet } from "./ConnectWallet";
// import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <Link to="/">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🔥</span>
            </button>
          </div>
          <div className="flex-1 ">
            <span className="text-lg font-bold">Astar Rewards</span>
          </div>
        </Link>
        {/* <div className="flex-none "> */}
        {/* <ConnectWallet />
          <SelectNetWork /> */}
        {/* <WalletMultiButton className="btn btn-ghost" /> */}
        {/* </div> */}
      </div>
    </>
  );
};
