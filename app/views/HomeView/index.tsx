import { Link } from "@remix-run/react";
import type { FC } from "react";
import { Header } from "~/common/Header";

import { Stats } from "./Stats";

export const HomeView: FC = ({}) => {
  // const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Header />
      <div className="text-center pt-2">
        <div className="hero min-h-16 py-4">
          <div className="text-center hero-content">
            <div className="max-w-lg">
              <h1 className="mb-4 text-5xl font-bold">dApp Staking Rank 👑</h1>
              <p>Exploer dAppStaking data on Astar and Shiden Network</p>
              {/* {publicKey ? <>Your address: {publicKey.toBase58()}</> : null} */}
            </div>
          </div>
        </div>
        <Stats />

        <div className="max-w-6xl mx-auto mt-16">
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
