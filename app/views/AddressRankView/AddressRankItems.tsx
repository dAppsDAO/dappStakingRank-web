import { Link } from "@remix-run/react";
import type { VFC } from "react";
import type { dAppType } from "../../constants/dApp";
import { dApps } from "../../constants/dApp";

type AddressItemType = {
  id: string;
  totalRewarded: number;
  rewards: any;
};

const AddressRankRow: VFC<{ item: AddressItemType; rank: number }> = ({
  item,
  rank,
}) => {
  return (
    <tr>
      <th>{rank}</th>
      <td>
        <div className="flex items-center space-x-2">
          <div>
            <Link to={"/address/" + item.id}>
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
          Math.round((Number(item.totalRewarded) / 3) * 100) / 100
        ).toLocaleString()}
      </td>
      <td>{item.rewards.totalCount}</td>
      <th>
        <Link to={"/address/" + item.id}>
          <button className="btn btn-secondary btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

export const AddressRankItems = (data: any) => {
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
          {data.accounts.map((item: AddressItemType, index: number) => {
            return (
              <AddressRankRow key={item.id} item={item} rank={index + 1} />
            );
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
