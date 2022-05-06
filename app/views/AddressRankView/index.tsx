import type { FC } from "react";
import { useQuery } from "urql";
import { AddressRankItems } from "./AddressRankItems";
// import { DAppsRankItems } from "./DAppsRankItems";

const AddressRankQUery = `
  query {
      accounts (first: 100,orderBy:TOTAL_REWARDED_DESC) {
              totalCount
              nodes {
                  id
                  totalRewarded
                rewards{
                  totalCount
                }
              }
          }
  }
`;
export const AddressRankView: FC = () => {
  const [result] = useQuery({
    query: AddressRankQUery,
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
                  <h1 className="mb-4 text-2xl font-bold">
                    Address Ranking 📝
                  </h1>
                </div>
              </div>
              <p className="mt-16">Ranking of dappStking rewards</p>
            </div>

            <div className="m-2">
              <AddressRankItems accounts={data.accounts.nodes} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
