import type { FC } from "react";
import { useQuery } from "urql";
import { useLocation } from "react-router-dom";
import type { dAppType } from "~/constants/dApp";
import { dApps } from "~/constants/dApp";
import { FiExternalLink } from "react-icons/fi";
import dayjs from "dayjs";

dayjs().format();

const AddressQUery = `
  query($id:String!) {
    account(id:$id){
        totalRewarded	
        rewards(orderBy:ERA_INDEX_DESC){
            nodes{
                reward
                eraIndex
                contractId
                date:timestamp # ISO string
            }
        }
    }
  }
`;
export const AddressView: FC = () => {
  const location = useLocation();
  const Address = location.pathname.substring(9, location.pathname.length);

  const [result] = useQuery({
    query: AddressQUery,
    variables: { id: Address },
  });
  const { data, fetching, error } = result;

  let total = data?.account.rewards.nodes.reduce(function (
    sum: number,
    element: any
  ) {
    return sum + element.reward;
  },
  0);

  if (error) return <p>Oh no... {error.message}</p>;
  console.log("fetched data.account.reward total: " + total);
  return (
    <div className="text-center pt-2">
      {fetching ? (
        <button className="btn loading btn-lg btn-ghost">loading</button>
      ) : (
        <>
          <div className="hero min-h-16 py-4">
            <div className="hero-content">
              <div className="max-w-lg">
                <h1 className="text-2xl font-bold mb-4">
                  dappStking rewards history
                </h1>
                <p className="text-xs">
                  Address:
                  <br /> {Address}
                </p>
                <a href={"https://astar.subscan.io/account/" + Address}>
                  <button className="btn btn-xs btn-link  gap-2 m-2">
                    <FiExternalLink className="w-4 h-4" /> Subscan
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal pb-8">
            <div className="stat">
              <div className="stat-title">Total Reward</div>
              <div className="stat-value  tabular-nums">
                {Math.floor(data.account.totalRewarded).toLocaleString()} ASTR
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Rewards Count</div>
              <div className="stat-value">
                {/* tmp: for loop of rewards count */}
                {data.account.rewards.nodes.length === 100 ? (
                  <>100 +</>
                ) : (
                  data.account.rewards.nodes.length
                )}
              </div>
            </div>
          </div>

          <div className="border-base-300 bg-base-200 p-8">
            <div className="text-2xl font-bold border-base-300">
              LatestdApp Staking Reward
            </div>
            <p>Maximum data is 100</p>
            <div className="flex  border-base-300 min-h-[6rem] min-w-[9rem]  flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-2">
              {data?.account.rewards.nodes.map(
                //todo : specify account type from schema
                (account: any, index: number) => {
                  const dApp: dAppType[] = dApps.filter((dApp: dAppType) => {
                    return dApp.address === account.contractId;
                  });

                  return (
                    <div key={index} className="card w-60 bg-base-100 m-2">
                      <div className="card-body">
                        <div className="card-body items-center text-center">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={dApp[0].imageURL}
                                alt={dApp[0].name + "image"}
                              />
                            </div>
                          </div>
                          <h2 className="card-title">
                            <div>
                              <div className="text-2xl font-bold">
                                {dApp[0].name}
                              </div>
                            </div>
                          </h2>
                        </div>
                        <p>ERA: {account.eraIndex}</p>
                        <p>{dayjs(account.date).format("YYYY-MM-DD")}</p>
                        <p>{dayjs(account.date).format("HH:mm:ss Z")}</p>

                        <div className="m-2 text-2xl font-bold text-primary">
                          {Math.floor(account.reward).toLocaleString()} ASTR
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
