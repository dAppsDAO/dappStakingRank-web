import { Link } from "@remix-run/react";
import type { FC } from "react";
import { ConnectWallet } from "./ConnectWallet";
import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none">
        <Link to="/">
          <button className="btn btn-square btn-ghost">
            <span className="text-4xl">🔥</span>
          </button>
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">OnFire</span>
      </div>
      <div className="flex-none">
        <ConnectWallet />
        {/* <WalletMultiButton className="btn btn-ghost" /> */}
        <SelectNetWork />
      </div>
    </div>
  );
};
