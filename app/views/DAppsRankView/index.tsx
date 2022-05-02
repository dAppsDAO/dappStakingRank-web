import type { FC } from "react";
import { useQuery } from "urql";
import { Header } from "~/common/Header";
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
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <Header />

      <div className="text-center pt-2">
        <div className="hero min-h-16 py-4">
          <div className="text-center hero-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-2xl font-bold">dApp Ranking 📝</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="m-8">
        <DAppsRankItems contracts={data.contracts.nodes} />
      </div>
    </>
  );
};
