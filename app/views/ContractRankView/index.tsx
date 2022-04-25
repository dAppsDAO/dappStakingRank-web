import { Link } from "@remix-run/react";
import { FC } from "react";
import { SelectNetWork } from "~/common/SelectNetwork";

export const ContractRankView: FC = ({}) => {
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
          <SelectNetWork />
          {/* <WalletMultiButton className="btn btn-ghost" /> */}
        </div>
      </div>

      <div className="text-center pt-2">
        <div className="hero min-h-16 py-4">
          <div className="text-center hero-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-2xl font-bold">
                Ranking by SmartContract 📝
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-8 stats stats-vertical lg:stats-horizontal shadow   text-secandary-content">
          <div className="stat">
            {/* <div className="stat-title">Total Reward</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">EVM</button>
            </div> */}
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Rewards</div>
            <div className="stat-value text-secondary">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="stat-figure ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="stat-title">Smart Contract Count</div>
            <div className="stat-value text-secondary">103</div>
            <div className="stat-desc">3 more than last month</div>
            {/* <div className="stat-actions">
              <button className="btn btn-xs">EVM</button>
              <button className="btn btn-xs">WASM</button>
            </div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Reward count</div>
            <div className="stat-value">89,200</div>
            <div className="stat-desc">125 more than last month</div>
            {/* <div className="stat-actions">
              <button className="btn btn-sm">depo</button>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row">
          <table className="m-8 p-8 table table-normal table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Contract Address</th>
                <th>Total Reward</th>
                <th>Reward Count</th>
                <th>Contract Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>0xa602d021da61ec4cc44dedbd4e3090a05c97a435</td>
                <td>3320.6792140532042565</td>
                <td>99</td>
                <td>
                  <button className="btn btn-xs">EVM</button>
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>0xe915d2393a08a00c5a463053edd31bae2199b9e7</td>
                <td>3110.1726098783334216</td>
                <td>81</td>
                <td>
                  <button className="btn btn-xs">EVM</button>
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>0xd59fc6bfd9732ab19b03664a45dc29b8421bda9a</td>
                <td>2011.1726098783334216</td>
                <td>62</td>
                <td>
                  <button className="btn btn-xs">EVM</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
