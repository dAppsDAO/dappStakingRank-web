import { Link } from "@remix-run/react";
import type { FC } from "react";
import { useQuery } from "urql";
import { Header } from "~/common/Header";
import type { HomeStatsData } from "~/types";

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
  // const { publicKey } = useWallet();

  const [result, _] = useQuery({
    query: HomeQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  class rewardsCollection extends Array {
    sum(key: string) {
      return this.reduce((a, b) => a + (b[key] || 0), 0);
    }
  }

  const contractsData = new rewardsCollection(...data.contracts.nodes);
  const sumContractValue = contractsData.sum("totalReward");
  const statsData: HomeStatsData = {
    totalAccountsCount: data.accounts.totalAccountsCount,
    totalRewards: sumContractValue,
    totalRewardCount: data.dAppStakingRewards.totalRewardCount,
  };

  return (
    <>
      <Header />
      <div className="text-center pt-2">
        <div className="hero min-h-16 py-4">
          <div className="text-center hero-content">
            <div className="max-w-lg">
              <h1 className="mb-4 text-5xl font-bold">dApp Staking Rank 👑</h1>
              <p>
                Exploer dAppStaking reward datas on Astar and Shiden Network
              </p>
              {/* {publicKey ? <>Your address: {publicKey.toBase58()}</> : null} */}
            </div>
          </div>
        </div>
        <Stats statsData={statsData} />

        <div className="max-w-6xl mx-auto mt-16">
          <div className="flex flex-col lg:flex-row m-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-6xl">
                  <div className="swap-on">📝</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Contract Rank</h2>
                <p>dAppStaking reward rank of smart contract</p>
                <div className="card-actions justify-end">
                  {/* <Link to="/address-rank"> */}
                  <button className="btn btn-primary btn-disabled">
                    Comming Soon
                  </button>
                  {/* </Link> */}
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
                  {/* <Link to="/contract-rank"> */}
                  <button className="btn btn-primary btn-disabled">
                    Comming Soon
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <label className="text-6xl">
                  <div className="swap-on">🔍</div>
                </label>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Search Rank</h2>
                <p>Search dAppStaking reward ranking from a address</p>
                <div className="card-actions justify-end">
                  {/* <Link to="/contract-rank"> */}
                  <button className="btn btn-primary btn-disabled">
                    Comming Soon
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
