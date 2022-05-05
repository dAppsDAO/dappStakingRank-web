import { Link } from "@remix-run/react";
import { FC } from "react";

export const SearchRankView: FC = () => {
  return (
    <>
      <button className="btn btn-block">block</button>
      <div className="text-center pt-2">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-2xl font-bold">
              Search Ranking by Address
            </h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Address</span>
              </label>
              <div className="input-group full">
                <input
                  type="text"
                  placeholder="Search address..."
                  className="input full input-bordered  w-full "
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
            {/* <p className="mb-5">
                This scaffold includes awesome tools for rapid development and
                deploy dapps to Solana: Next.JS, TypeScript, TailwindCSS, Daisy
                UI.
              </p>
              <p className="mb-5">
                Sollana wallet adapter is connected and ready to use.
              </p> */}
            <p>
              {/* {publicKey ? <>Your address: {publicKey.toBase58()}</> : null} */}
            </p>
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
    </>
  );
};
