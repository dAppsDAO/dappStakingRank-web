import { Link } from "@remix-run/react";
import type { FC } from "react";
import { useState } from "react";
import { useQuery } from "urql";

import { Stats } from "./Stats";

const HomeQuery = `
  query {
    contracts(orderBy:TOTAL_REWARD_DESC){
      nodes{
        totalReward
      }
    }
    dAppStakingRewards  {
      totalRewardCount:	totalCount
    }
    accounts{
      totalAccountsCount: totalCount
    }
  }
`;
export const HomeView: FC = () => {
  const [inputAddressValue, setInputAddressValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddressValue(e.target.value);
  };
  const searchHandler = () => {
    window.location.href = "/address/" + inputAddressValue;
  };
  const [result, _] = useQuery({
    query: HomeQuery,
  });

  const { data, fetching, error } = result;

  if (fetching)
    return (
      <div className="text-center pt-2 ">
        <button className="btn loading btn-lg btn-ghost">loading</button>
      </div>
    );
  if (error) return <p>Oh no... {error.message}</p>;

  class rewardsCollection extends Array {
    sum(key: string) {
      return this.reduce((a, b) => a + (b[key] || 0), 0);
    }
  }

  const contractsData = new rewardsCollection(...data.contracts.nodes);
  const sumContractValue = contractsData.sum("totalReward");
  const statsData = {
    totalAccountsCount: data.accounts.totalAccountsCount,
    totalRewards: sumContractValue,
    totalRewardCount: data.dAppStakingRewards.totalRewardCount,
  };

  return (
    <>
      <div className="text-center">
        <div className="hero p-8 bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="m-4">
                <span className="text-6xl">🔥</span>
              </div>
              <h1 className="text-4xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  OnFire dAppStaking
                </span>
              </h1>
              <p className="py-6">
                Exploer dAppStaking datas on Astar network.
              </p>
              {!inputAddressValue.length ? (
                <>
                  <input
                    type="text"
                    placeholder="Search Address..."
                    className="input input-bordered input-md w-full max-w-xs"
                    value={inputAddressValue}
                    onChange={(event) => handleChange(event)}
                  />
                </>
              ) : (
                <>
                  <label className="input-group input-group-md">
                    <input
                      type="text"
                      placeholder="Search Address..."
                      className="input input-bordered input-md w-full max-w-xs"
                      value={inputAddressValue}
                      onChange={(event) => handleChange(event)}
                    />
                    <button
                      className="btn btn-primary btn-md"
                      onClick={searchHandler}
                    >
                      Search
                    </button>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>

        <Stats statsData={statsData} />

        <div className="max-w-2xl mx-auto mt-16">
          <div className="flex flex-col lg:flex-row m-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-6xl">
                  <div className="swap-on">📝</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">dApp Rank</h2>
                <p>dAppStaking reward ranking of dApp</p>
                <div className="card-actions justify-end">
                  <Link to="/dapps-rank">
                    <button className="btn btn-primary">Check</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-6xl">
                  <div className="swap-on">👛</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Address Rank</h2>
                <p>dAppStaking ranking of wallet address</p>
                <div className="card-actions justify-end">
                  <Link to="/address-rank">
                    <button className="btn btn-primary">Check</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
