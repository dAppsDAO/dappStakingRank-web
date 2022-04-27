import { Link } from "@remix-run/react";
import type { FC } from "react";
import { ConnectWallet } from "./ConnectWallet";
import { SelectNetWork } from "./SelectNetwork";

export const Header: FC = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none">
          <Link to="/">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🔥</span>
            </button>
          </Link>
        </div>
        <div className="flex-1 ">
          <span className="text-lg font-bold">OnFire</span>
        </div>
        <div className="flex-none ">
          <ConnectWallet />
          <SelectNetWork />
          {/* <WalletMultiButton className="btn btn-ghost" /> */}
        </div>
      </div>
    </>
  );
};
