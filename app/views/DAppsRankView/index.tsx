import type { FC } from "react";
import { useQuery } from "urql";
import { DAppsRankItems } from "./DAppsRankItems";

const DAppsRankQUery = `
  query {
  contracts(orderBy:TOTAL_REWARD_DESC){
    totalCount
      nodes{
        id
        totalReward
        rewards{
          totalCount
          nodes{
            eraIndex
            reward
            timestamp
          }
        }
      }
    }
  }
`;
export const DAppsRankView: FC = ({}) => {
  const [result, _] = useQuery({
    query: DAppsRankQUery,
  });

  const { data, fetching, error } = result;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <div className="text-center pt-2">
        {fetching ? (
          <button className="btn loading btn-lg btn-ghost">loading</button>
        ) : (
          <>
            <div className="hero min-h-16 py-4">
              <div className="text-center hero-content">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-2xl font-bold">dApp Ranking 📝</h1>
                </div>
              </div>
              <p className="mt-16">Ranking of dappStking rewards</p>
            </div>

            <div className="m-2">
              <DAppsRankItems contracts={data.contracts.nodes} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
