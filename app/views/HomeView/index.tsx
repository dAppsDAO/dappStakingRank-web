import { Link } from "@remix-run/react";
import { FC } from "react";
import { SelectNetWork } from "~/common/SelectNetwork";

export const HomeView: FC = ({}) => {
  // const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <span className="text-4xl">🔥</span>
          </button>
        </div>
        <div className="flex-1 px-2 mx-2">
          <span className="text-lg font-bold">OnFire</span>
        </div>
        <div className="flex-none">
          {/* <WalletMultiButton className="btn btn-ghost" /> */}
          <SelectNetWork />
        </div>
      </div>

      <div className="text-center pt-2">
        <div className="hero min-h-16 py-4">
          <div className="text-center hero-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold">dApp Staking Rank 👑</h1>
              <p className="mb-5">
                This scaffold includes awesome tools for rapid development and
                deploy dapps to Solana: Next.JS, TypeScript, TailwindCSS, Daisy
                UI.
              </p>
              <p className="mb-5">
                Sollana wallet adapter is connected and ready to use.
              </p>
              <p>
                {/* {publicKey ? <>Your address: {publicKey.toBase58()}</> : null} */}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-8xl">
                  <div className="swap-on">📝</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Contract Rank</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to="/address-rank">
                    <button className="btn btn-primary">Check</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-8xl">
                  <div className="swap-on">👛</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Address Rank</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to="/contract-rank">
                    <button className="btn btn-primary">Check</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-8xl">
                  <div className="swap-on">🔍</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Search Rank</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to="/contract-rank">
                    <button className="btn btn-primary">Check</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
