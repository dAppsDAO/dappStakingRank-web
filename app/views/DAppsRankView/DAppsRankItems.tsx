import { Link } from "@remix-run/react";
import type { VFC } from "react";
import type { dAppType } from "../../constants/dApp";
import { dApps } from "../../constants/dApp";

type DAppItemType = {
  id: string;
  totalReward: number;
  rewards: any;
};

const DAppsRankRow: VFC<{ item: DAppItemType; rank: number }> = ({
  item,
  rank,
}) => {
  const dApp = dApps.find((dApp: dAppType) => {
    return dApp.address === item.id;
  });
  return (
    <tr>
      <th>{rank}</th>
      <td>
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="mask mask-squircle w-6 h-6">
              <img
                className="lazyload"
                width={24}
                height={24}
                src={dApp?.imageURL}
                alt={dApp?.name + "image"}
              />
            </div>
          </div>
          <div>
            <Link to={"/dapp/" + item.id}>
              <div className="font-bold">{dApp?.name}</div>
              <div className="text-sm opacity-50">
                {item.id.substring(0, 6) + "..." + item.id.substring(-6, 5)}
              </div>
            </Link>
          </div>
        </div>
      </td>
      {/* [TMP] Apply one-third to total rewards #2 */}
      <td>
        {(
          Math.round((Number(item.totalReward) / 3) * 100) / 100
        ).toLocaleString()}
      </td>
      <td>{item.rewards.totalCount}</td>
      <th>
        <Link to={"/dapp/" + item.id}>
          <button className="btn btn-secondary btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export const DAppsRankItems = (data: any) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Rewards</th>
            <th>Rewards Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.contracts.map((item: DAppItemType, index: number) => {
            return <DAppsRankRow key={item.id} item={item} rank={index + 1} />;
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Rewards</th>
            <th>Rewards Count</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
