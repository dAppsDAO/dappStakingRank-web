import type { FC } from "react";
import { useQuery } from "urql";
import { useLocation } from "react-router-dom";
import type { dAppType } from "~/constants/dApp";
import { dApps } from "~/constants/dApp";
import { DAppAnalytics } from "./DAppAnalytics";

const DAppsRankQUery = `
  query($id:String!) {
    contract(id:$id){
        totalReward
        rewards(orderBy:REWARD_DESC){
            totalCount
            nodes{
                eraIndex
                reward
                timestamp
                account{
                id
                totalRewarded
                }
            }
        }
    }
  }
`;
export const DAppView: FC = () => {
  const location = useLocation();
  const dAppId = location.pathname.substring(6, location.pathname.length);
  const dApp = dApps.find((dApp: dAppType) => {
    return dApp.address === dAppId;
  });
  const [result] = useQuery({
    query: DAppsRankQUery,
    variables: { id: dAppId },
  });
  const { data, fetching, error } = result;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div className="text-center pt-2">
      {fetching ? (
        <button className="btn loading btn-lg btn-ghost">loading</button>
      ) : (
        <>
          <div className="hero min-h-16 py-4">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={dApp?.imageURL} alt={dApp?.name + "image"} />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold">{dApp?.name}</div>
              </div>
            </div>
          </div>
          <p>TOP 100 of dappStking rewards on {dApp?.name}</p>

          <div className="m-8">
            {data?.contract && (
              <DAppAnalytics
                rewards={data.contract.rewards}
                totalReward={data.contract.totalReward}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
