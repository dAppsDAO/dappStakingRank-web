import type { VFC } from "react";
import type { dAppType } from "../../constants/dApp";
import { dApps } from "../../constants/dApp";

type DAppItemType = {
  id: string;
  totalReward: number;
  rewards: any;
};

const DAppItem: VFC<{ item: DAppItemType; rank: number }> = ({
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
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-6 h-6">
              <img src={dApp?.imageURL} alt={dApp?.name + "image"} />
            </div>
          </div>
          <div>
            <div className="font-bold">{dApp?.name}</div>
            {/* <div className="text-sm opacity-50">{item.id}</div> */}
            <div className="text-sm opacity-50">
              {item.id.substring(0, 6) + "..." + item.id.substring(-6, 5)}
            </div>
          </div>
        </div>
      </td>
      <td>{Math.floor(item.totalReward)}</td>
      <td>{item.rewards.totalCount}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export const DAppsRankItems = (data: any) => {
  return (
    <div className="overflow-x-auto w-full">
      {console.log(data)}
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
            return <DAppItem key={item.id} item={item} rank={index + 1} />;
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
